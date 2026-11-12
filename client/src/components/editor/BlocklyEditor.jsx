import { useRef, useEffect, useCallback } from 'react';
import * as Blockly from 'blockly';
import 'blockly/blocks';
import 'blockly/javascript';
import { getToolboxForLab, registerCustomBlocks } from './blockly-toolbox';
import { ArduinoGenerator } from './blockly-generator';

// Register custom blocks once
let blocksRegistered = false;

export default function BlocklyEditor({ labId = 1, onCodeChange }) {
  const containerRef = useRef(null);
  const workspaceRef = useRef(null);

  const handleWorkspaceChange = useCallback(() => {
    if (!workspaceRef.current) return;
    try {
      // Dùng trình sinh mã ArduinoGenerator thay vì vòng lặp tĩnh
      const bodyCode = ArduinoGenerator.workspaceToCode(workspaceRef.current);

      // Tự động phân tích các thư viện và biến cần thiết dựa trên code sinh ra
      const includes = new Set(['#include <Arduino.h>', '#include "PTITCube.h"']);
      const declarations = [];

      if (bodyCode.includes('sensor.')) declarations.push('PTIT_Sensor sensor;');
      if (bodyCode.includes('gps.')) declarations.push('PTIT_GPS gps;');
      if (bodyCode.includes('lora.')) declarations.push('PTIT_COM lora;');
      if (bodyCode.includes('eps.')) declarations.push('PTIT_EPS eps;');
      if (bodyCode.includes('storage.')) declarations.push('PTIT_Storage storage;');
      if (bodyCode.includes('cdh.')) declarations.push('PTIT_CDH cdh;');
      if (bodyCode.includes('camera.')) declarations.push('PTIT_Camera camera;');

      let finalCode = [...includes].join('\n') + '\n\n';
      if (declarations.length > 0) {
        finalCode += '// === Khai báo đối tượng ===\n';
        finalCode += declarations.join('\n') + '\n\n';
      }

      finalCode += bodyCode;

      if (onCodeChange) onCodeChange(finalCode);
    } catch (err) {
      console.error('Code generation error:', err);
    }
  }, [onCodeChange]);

  useEffect(() => {
    if (!containerRef.current || workspaceRef.current) return;

    if (!blocksRegistered) {
      registerCustomBlocks();
      blocksRegistered = true;
    }

    const toolbox = getToolboxForLab(labId);

    workspaceRef.current = Blockly.inject(containerRef.current, {
      toolbox,
      theme: Blockly.Themes.Classic,
      grid: { spacing: 20, length: 3, colour: '#1a1f2e', snap: true },
      zoom: { controls: true, wheel: true, startScale: 0.9, maxScale: 3, minScale: 0.3 },
      trashcan: true,
      move: { scrollbars: true, drag: true },
      renderer: 'zelos',
    });

    // Tải cấu trúc mặc định (Setup và Loop) nếu workspace trống
    const defaultXml = `
      <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="arduino_setup" x="50" y="50"></block>
        <block type="arduino_loop" x="50" y="250"></block>
      </xml>
    `;
    Blockly.Xml.domToWorkspace(Blockly.utils.xml.textToDom(defaultXml), workspaceRef.current);

    workspaceRef.current.addChangeListener(handleWorkspaceChange);

    const resizeObserver = new ResizeObserver(() => {
      if (workspaceRef.current) {
        Blockly.svgResize(workspaceRef.current);
      }
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, [labId, handleWorkspaceChange]);

  return (
    <div ref={containerRef} className="blockly-container" style={{ width: '100%', height: '100%', minHeight: '400px' }} />
  );
}
