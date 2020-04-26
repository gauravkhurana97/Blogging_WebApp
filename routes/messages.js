const express = require('express');
const commentConttroller = require('../controllers/getmessages');

const router = express.Router();



router.route('/')
    .get(commentConttroller.getmessages);

module.exports = router;