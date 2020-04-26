const ParentComment = require('../models/Parent');

const catchAsync = require('./../utils/catchAsync');




exports.getallCommentofBlog = catchAsync(async (req, res, next) => {

  console.log(req.params.blog_id);

  const commentTree = await ParentComment.find({
    blog_id: req.params.blog_id
  }).populate('first_childrens');

  res.status(200).json({
    status: 'success',
    data: {
      comments: commentTree
    }
  })
});

exports.getComment = catchAsync(async (req, res, next) => {

  const commentTree = await ParentComment.findById({
    "_id": req.params.id,
    "blog_id": req.params.blog_id
  }).populate('first_childrens');

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