const catchAsync = require('./../utils/catchAsync');
const fs = require("fs");
const path = require("path");

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('I could not find that file 😢');
            resolve(data);
        });
    });
};


exports.getmessages = catchAsync(async (req, res, next) => {


    console.log(path.join(__dirname, './../js/reviews.txt'))
    const messages = await readFilePro(path.join(__dirname, './../js/reviews.txt'));
    console.log("hello");
    res.status(200).json({
        status: 'success',
        data: {
            comments: JSON.parse(messages)
        }
    })
});