const ChildComment = require('../models/child');

const catchAsync = require('./../utils/catchAsync');

exports.getfirstComments = catchAsync(async (req, res, next) => {
    const commentTree = await ChildComment.find();
    console.log("hello");
    res.status(200).json({
        status: 'success',
        data: {
            comments: commentTree
        }
    })
});

exports.getfirstComment = catchAsync(async (req, res, next) => {

    console.log(req.params.id);
    const commentTree = await ChildComment.findById(req.params.id).populate('nextChild');
    console.log(commentTree);

    res.status(200).json({
        status: 'successsss',
        data: {
            comments: commentTree
        }
    })
});

exports.createComment = catchAsync(async (req, res, next) => {
    const newComment = await ChildComment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            comments: newComment
        }
    })
});