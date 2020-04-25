const ParentComment = require('../models/Parent');

const catchAsync = require('./../utils/catchAsync');


exports.getComments = catchAsync(async (req, res, next) => {
  const commentTree = await ParentComment.find();
  console.log("hello");
  res.status(200).json({
    status: 'success',
    data: {
      comments: commentTree
    }
  })
});

exports.getComment = catchAsync(async (req, res, next) => {

  const commentTree = await ParentComment.findById(req.params.id).populate('first_childrens');

  res.status(200).json({
    status: 'success',
    data: {
      comments: commentTree
    }
  })
});


exports.createComment = catchAsync(async (req, res, next) => {
  const newComment = await CommentModel.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      comments: newComment
    }
  });


});
