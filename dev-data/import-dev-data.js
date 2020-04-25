const fs = require('fs');
const mongoose = require('mongoose');
const Parent = require('./../models/Parent');


const comments = JSON.parse(
    fs.readFileSync(`${__dirname}/Parent.json`, 'utf-8')
);


mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true
});


// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Parent.create(comments);
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
        await Parent.deleteMany();
        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}