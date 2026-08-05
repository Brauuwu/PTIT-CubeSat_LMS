const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { code, board } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, error: 'Không có mã nguồn' });
  }

  // MÔ PHỎNG (MOCK) KẾT QUẢ BIÊN DỊCH CHO PHASE 1
  // Trong thực tế, ở đây sẽ gọi PlatformIO CLI qua child_process
  
  setTimeout(() => {
    res.json({
      success: true,
      output: 
        'Platform: espressif32\n' +
        'Board: esp32dev\n' +
        'Framework: arduino\n' +
        '─────────────────────────────────\n' +
        'Compiling .pio/build/main.cpp.o\n' +
        'Linking .pio/build/firmware.elf\n' +
        'Building .pio/build/firmware.bin\n' +
        '─────────────────────────────────\n' +
        'RAM:   [==        ]  15.2% (49856 bytes)\n' +
        'Flash: [====      ]  42.8% (561024 bytes)\n',
      size: '561,024 bytes',
      binary: 'MOCK_BINARY_DATA_BASE64'
    });
  }, 1500); // Giả lập độ trễ biên dịch
});

module.exports = router;
