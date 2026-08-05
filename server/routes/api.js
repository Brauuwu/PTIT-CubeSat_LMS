const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

// Lấy tài liệu Markdown cho Lab
router.get('/docs/:labId', async (req, res) => {
  try {
    const docPath = path.join(__dirname, '..', 'data', 'docs', `${req.params.labId}.md`);
    
    try {
      await fs.access(docPath);
    } catch (error) {
      return res.status(404).send(`# ${req.params.labId}\n\nTài liệu đang được cập nhật...`);
    }

    const content = await fs.readFile(docPath, 'utf8');
    res.send(content);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi đọc tài liệu' });
  }
});

// API giữ chỗ cho Export Dashboard
router.post('/projects/export', (req, res) => {
  res.json({ success: true, url: 'https://cubesat.ptit.edu.vn/p/xyz123' });
});

module.exports = router;
