const mongoose = require('mongoose');
const Subchild = require('./subchild');

const child_schema = new mongoose.Schema({

    comment_id: {
        type: Number,
        required: [true, 'A tour must have a d']
    },user_id: {
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
    comment_parent_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Parent',
    },
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


// child_schema.virtual('durationWeeks').get(function () {
//     return this.dislikes / 1;
// });

// Virtual populate
child_schema.virtual('nextChild', {
    ref: 'Subchild',
    foreignField: "secondparent_id",
    localField: '_id'
})


const First_child = mongoose.model('First_child', child_schema);
module.exports = First_child;