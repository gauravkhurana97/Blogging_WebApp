const fs = require('fs');
const mongoose = require('mongoose');
const Child = require('./../models/child');


const comments = JSON.parse(
    fs.readFileSync(`${__dirname}/comments.json`, 'utf-8')
);


mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true
});


// IMPORT DATA INTO DB
const importData = async () => {
    try {
        await Child.create(comments);
        console.log('Data successfully loaded!');
    } catch (err) {
        console.log(err);
    }
    process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
        await Child.deleteMany();
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