const mongoose = require('mongoose');

const sub_schema = new mongoose.Schema({

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
    secondparent_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'First_child',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
});



const Subchild = mongoose.model('Subchild', sub_schema);
module.exports = Subchild;