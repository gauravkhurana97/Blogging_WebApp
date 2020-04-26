const mongoose = require('mongoose');
const First_child = require('./child');

const parent_schema = new mongoose.Schema({

    blog_id: {
        type: mongoose.Schema.ObjectId,
    },
    user_id: {
        type: Number,
        required: [true, 'A tour must have a d']
    },
    comment_id: {
        type: Number,
        required: [true, 'A tour must have a d']
    },
    comment_msg: {
        type: String,
        required: [true, 'A tour must have a difficulty'],
    },
    likes: {
        type: Number,
        required: [true, 'A tour must have a duraon']
    },
    dislikes: {
        type: Number,
        required: [true, 'A tour must have a dution']
    },
    comment_parent_id: Number,
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});


// Virtual populate
parent_schema.virtual('first_childrens', {
    ref: 'First_child',
    foreignField: "comment_parent_id",
    localField: '_id'
})

const Parent = mongoose.model('Parent', parent_schema);
module.exports = Parent;