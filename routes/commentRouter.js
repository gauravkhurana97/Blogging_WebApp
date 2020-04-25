const express = require('express');
const commentConttroller = require('./../controllers/commentConttroller');

const router = express.Router();


router.route('/')
    .get(commentConttroller.getComments)
    .post(commentConttroller.createComment);


router.route('/:id')
    .get(commentConttroller.getComment);



module.exports = router;