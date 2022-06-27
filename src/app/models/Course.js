const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 512 },
    videoID:{type: String, maxLength:255},
    slug:{type: String, slug:'name', unique: true},
    image: { type: String, maxLength: 255 },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
},{
    timestamps:true,
});

module.exports = mongoose.model('Course', Course);
