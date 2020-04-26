const mongoose = require('mongoose');

const blog_schema = new mongoose.Schema({

    user_id: {
        type: Number,
        required: [true, 'A tour must have a d']
    },
    likes: {
        type: Number,
        required: [true, 'A tour must have a duraon']
    },
    dislikes: {
        type: Number,
        required: [true, 'A tour must have a dution']
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
});


const Blog = mongoose.model('Blog', blog_schema);
module.exports = Blog;