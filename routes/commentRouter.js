const express = require('express');
const commentConttroller = require('./../controllers/commentConttroller');

const router = express.Router();


router.route('/:blog_id/comments')
    .get(commentConttroller.getallCommentofBlog)
    .post(commentConttroller.createComment);


router.route('/:blog_id/comments/:id')
    .get(commentConttroller.getComment);

    


module.exports = router;