const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true }, // ชื่อของวัตถุดิบ
    category: { type: String }, // หมวดหมู่ของวัตถุดิบ
    expiryDate: { type: Date, required: true }, // วันหมดอายุ
    createdAt: { type: Date, default: Date.now } // วันที่สร้าง
});

module.exports = mongoose.model('Item', ItemSchema);
