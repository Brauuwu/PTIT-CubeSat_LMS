import * as Blockly from 'blockly';

export const ArduinoGenerator = new Blockly.Generator('Arduino');

// Define rules for connecting blocks sequentially
ArduinoGenerator.scrub_ = function(block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = thisOnly ? '' : ArduinoGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

// Required for order of operations (Operator precedence)
ArduinoGenerator.ORDER_ATOMIC = 0;
ArduinoGenerator.ORDER_NONE = 99;

// ==========================================
// 1. Arduino Core & Custom Structure
// ==========================================
ArduinoGenerator.forBlock['arduino_setup'] = function(block, generator) {
  const statements = generator.statementToCode(block, 'DO');
  return 'void setup() {\n  Serial.begin(115200);\n' + statements + '}\n';
};

ArduinoGenerator.forBlock['arduino_loop'] = function(block, generator) {
  const statements = generator.statementToCode(block, 'DO');
  return 'void loop() {\n' + statements + '}\n';
};

ArduinoGenerator.forBlock['serial_print'] = function(block, generator) {
  const text = block.getFieldValue('TEXT');
  return `  Serial.println("${text}");\n`;
};

ArduinoGenerator.forBlock['digital_write'] = function(block, generator) {
  const pin = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  return `  digitalWrite(${pin}, ${state});\n`;
};

ArduinoGenerator.forBlock['digital_read'] = function(block, generator) {
  const pin = block.getFieldValue('PIN');
  return [`digitalRead(${pin})`, ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['analog_read'] = function(block, generator) {
  const pin = block.getFieldValue('PIN');
  return [`analogRead(${pin})`, ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['delay_ms'] = function(block, generator) {
  const ms = block.getFieldValue('MS');
  return `  delay(${ms});\n`;
};

ArduinoGenerator.forBlock['pin_mode'] = function(block, generator) {
  const pin = block.getFieldValue('PIN');
  const mode = block.getFieldValue('MODE');
  return `  pinMode(${pin}, ${mode});\n`;
};

// ==========================================
// 2. PTITCube Components
// ==========================================
ArduinoGenerator.forBlock['sensor_init'] = function(block, generator) {
  return `  sensor.init();\n`;
};
ArduinoGenerator.forBlock['sensor_read_temp'] = function(block, generator) {
  return [`sensor.getTemperature()`, ArduinoGenerator.ORDER_ATOMIC];
};
ArduinoGenerator.forBlock['sensor_read_pressure'] = function(block, generator) {
  return [`sensor.getPressure()`, ArduinoGenerator.ORDER_ATOMIC];
};
ArduinoGenerator.forBlock['sensor_update'] = function(block, generator) {
  return `  sensor.update();\n`;
};
ArduinoGenerator.forBlock['imu_read_acc'] = function(block, generator) {
  const axis = block.getFieldValue('AXIS');
  return [`sensor.getAcc${axis}()`, ArduinoGenerator.ORDER_ATOMIC];
};
ArduinoGenerator.forBlock['imu_read_gyro'] = function(block, generator) {
  const axis = block.getFieldValue('AXIS');
  return [`sensor.getGyro${axis}()`, ArduinoGenerator.ORDER_ATOMIC];
};
ArduinoGenerator.forBlock['imu_read_mag'] = function(block, generator) {
  const axis = block.getFieldValue('AXIS');
  return [`sensor.getMag${axis}()`, ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['eps_init'] = function(block, generator) {
  return `  eps.init();\n`;
};
ArduinoGenerator.forBlock['eps_read_voltage'] = function(block, generator) {
  return [`eps.getBatteryVoltage()`, ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['gps_init'] = function(block, generator) {
  return `  gps.init();\n`;
};
ArduinoGenerator.forBlock['gps_read'] = function(block, generator) {
  return `  gps.update();\n`;
};
ArduinoGenerator.forBlock['gps_get_coord'] = function(block, generator) {
  const coord = block.getFieldValue('COORD');
  const func = coord === 'LAT' ? 'gps.getLat()' : 'gps.getLng()';
  return [func, ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['storage_init'] = function(block, generator) {
  return `  storage.init();\n`;
};
ArduinoGenerator.forBlock['storage_log'] = function(block, generator) {
  const data = block.getFieldValue('DATA');
  return `  storage.logData("${data}");\n`;
};

ArduinoGenerator.forBlock['com_init'] = function(block, generator) {
  return `  lora.init();\n`;
};
ArduinoGenerator.forBlock['com_send'] = function(block, generator) {
  const msg = generator.valueToCode(block, 'MSG', ArduinoGenerator.ORDER_NONE) || '""';
  return `  lora.sendMessage(${msg});\n`;
};
ArduinoGenerator.forBlock['com_receive'] = function(block, generator) {
  return [`lora.receiveMessage()`, ArduinoGenerator.ORDER_ATOMIC];
};
ArduinoGenerator.forBlock['com_available'] = function(block, generator) {
  return [`lora.available()`, ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['cdh_init'] = function(block, generator) {
  return `  cdh.init();\n`;
};

ArduinoGenerator.forBlock['camera_capture'] = function(block, generator) {
  return `  camera.capture();\n`;
};

// ==========================================
// 3. Logic & Loops & Math Generators (C++ Equivalents)
// ==========================================

ArduinoGenerator.forBlock['controls_if'] = function(block, generator) {
  let n = 0;
  let code = '';
  do {
    const conditionCode = generator.valueToCode(block, 'IF' + n, ArduinoGenerator.ORDER_NONE) || 'false';
    const branchCode = generator.statementToCode(block, 'DO' + n);
    code += (n > 0 ? ' else ' : '') + 'if (' + conditionCode + ') {\n' + branchCode + '}';
    n++;
  } while (block.getInput('IF' + n));

  if (block.getInput('ELSE')) {
    const branchCode = generator.statementToCode(block, 'ELSE');
    code += ' else {\n' + branchCode + '}';
  }
  return code + '\n';
};

ArduinoGenerator.forBlock['logic_compare'] = function(block, generator) {
  const OPERATORS = { 'EQ': '==', 'NEQ': '!=', 'LT': '<', 'LTE': '<=', 'GT': '>', 'GTE': '>=' };
  const operator = OPERATORS[block.getFieldValue('OP')];
  const order = ArduinoGenerator.ORDER_ATOMIC;
  const arg0 = generator.valueToCode(block, 'A', order) || '0';
  const arg1 = generator.valueToCode(block, 'B', order) || '0';
  return [arg0 + ' ' + operator + ' ' + arg1, order];
};

ArduinoGenerator.forBlock['logic_operation'] = function(block, generator) {
  const operator = block.getFieldValue('OP') === 'AND' ? '&&' : '||';
  const order = ArduinoGenerator.ORDER_ATOMIC;
  const arg0 = generator.valueToCode(block, 'A', order) || 'false';
  const arg1 = generator.valueToCode(block, 'B', order) || 'false';
  return [arg0 + ' ' + operator + ' ' + arg1, order];
};

ArduinoGenerator.forBlock['logic_boolean'] = function(block, generator) {
  const code = block.getFieldValue('BOOL') === 'TRUE' ? 'true' : 'false';
  return [code, ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['controls_repeat_ext'] = function(block, generator) {
  const repeats = generator.valueToCode(block, 'TIMES', ArduinoGenerator.ORDER_ATOMIC) || '0';
  const branch = generator.statementToCode(block, 'DO');
  return `for (int i = 0; i < ${repeats}; i++) {\n${branch}}\n`;
};

ArduinoGenerator.forBlock['controls_whileUntil'] = function(block, generator) {
  const until = block.getFieldValue('MODE') === 'UNTIL';
  const arg0 = generator.valueToCode(block, 'BOOL', ArduinoGenerator.ORDER_NONE) || 'false';
  const branch = generator.statementToCode(block, 'DO');
  const condition = until ? `!(${arg0})` : arg0;
  return `while (${condition}) {\n${branch}}\n`;
};

ArduinoGenerator.forBlock['controls_for'] = function(block, generator) {
  const variable = block.getFieldValue('VAR');
  const from = generator.valueToCode(block, 'FROM', ArduinoGenerator.ORDER_ATOMIC) || '0';
  const to = generator.valueToCode(block, 'TO', ArduinoGenerator.ORDER_ATOMIC) || '0';
  const by = generator.valueToCode(block, 'BY', ArduinoGenerator.ORDER_ATOMIC) || '1';
  const branch = generator.statementToCode(block, 'DO');
  return `for (int ${variable} = ${from}; ${variable} <= ${to}; ${variable} += ${by}) {\n${branch}}\n`;
};

ArduinoGenerator.forBlock['math_number'] = function(block, generator) {
  return [block.getFieldValue('NUM'), ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['math_arithmetic'] = function(block, generator) {
  const OPERATORS = { 'ADD': '+', 'MINUS': '-', 'MULTIPLY': '*', 'DIVIDE': '/', 'POWER': '^' };
  const operator = OPERATORS[block.getFieldValue('OP')];
  const order = ArduinoGenerator.ORDER_ATOMIC;
  const arg0 = generator.valueToCode(block, 'A', order) || '0';
  const arg1 = generator.valueToCode(block, 'B', order) || '0';
  
  if (operator === '^') {
    return [`pow(${arg0}, ${arg1})`, order];
  }
  return [`(${arg0} ${operator} ${arg1})`, order];
};

ArduinoGenerator.forBlock['text'] = function(block, generator) {
  return ['String("' + block.getFieldValue('TEXT') + '")', ArduinoGenerator.ORDER_ATOMIC];
};

ArduinoGenerator.forBlock['text_print'] = function(block, generator) {
  const msg = generator.valueToCode(block, 'TEXT', ArduinoGenerator.ORDER_NONE) || '""';
  return `  Serial.println(${msg});\n`;
};

ArduinoGenerator.forBlock['text_join'] = function(block, generator) {
  // text_join requires special handling in Arduino (concatenating strings)
  const elements = [];
  for (let i = 0; i < block.itemCount_; i++) {
    elements.push(generator.valueToCode(block, 'ADD' + i, ArduinoGenerator.ORDER_NONE) || '""');
  }
  const code = elements.length ? elements.join(' + ') : '""';
  return [code, ArduinoGenerator.ORDER_ATOMIC];
};
