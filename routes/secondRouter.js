const express = require('express');
const commentConttroller = require('../controllers/secondChildController');

const router = express.Router();


router.route('/')
    .get(commentConttroller.getfirstComments)
    .post(commentConttroller.createComment);

router.route('/:id')
    .get(commentConttroller.getfirstComment);


module.exports = router;