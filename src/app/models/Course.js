const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255},
    description: { type: String, maxLength: 600},
    image: { type: String, maxLength: 500},
    createdAt: { type: Date, default: Date.now}, //lưu thời gian bản ghi được tạo
    updatedAt: { type: Date, default: Date.now}, //lưu thời gian bản ghi được cập nhật
});

module.exports = mongoose.model('Course', Course);

