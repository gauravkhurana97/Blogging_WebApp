const Subchild = require('../models/subchild');

const catchAsync = require('./../utils/catchAsync');

exports.getfirstComments = catchAsync(async (req, res, next) => {
    const commentTree = await Subchild.find();
    console.log("hello");
    res.status(200).json({
        status: 'success',
        data: {
            comments: commentTree
        }
    })
});

exports.getfirstComment = catchAsync(async (req, res, next) => {

    const commentTree = await Subchild.findById(req.params.id);
    // .populate('nextChild');
    console.log(commentTree);
    res.status(200).json({
        status: 'success',
        data: {
            comments: commentTree
        }
    })
});

exports.createComment = catchAsync(async (req, res, next) => {
    const newComment = await Subchild.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            comments: newComment
        }
    })
});