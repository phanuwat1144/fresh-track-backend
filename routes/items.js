const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// GET: ดึงรายการวัตถุดิบทั้งหมด
router.get('/', async (req, res) => {
    try {
        const items = await Item.find(); // ดึงข้อมูลทั้งหมดจากฐานข้อมูล
        res.json(items); // ส่งข้อมูลกลับไปในรูปแบบ JSON
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// POST: เพิ่มวัตถุดิบใหม่
router.post('/', async (req, res) => {
    try {
        const { name, category, expiryDate } = req.body; // รับข้อมูลจาก Body
        const newItem = new Item({ name, category, expiryDate });
        await newItem.save(); // บันทึกข้อมูลลงในฐานข้อมูล
        res.json(newItem); // ส่งข้อมูลที่บันทึกแล้วกลับไป
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// DELETE: ลบวัตถุดิบ
router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id); // ลบวัตถุดิบที่มี ID ที่ส่งมา
        res.json({ msg: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
