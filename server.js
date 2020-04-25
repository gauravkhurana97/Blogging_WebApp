const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});


const app = require('./app');

mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
// ,
// {
//     "comment_id": "10",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "4",
//     "children_id": []
// },
// {
//     "comment_id": "11",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "10",
//     "children_id": []
// },
// {
//     "comment_id": "12",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "10",
//     "children_id": []
// },
// {
//     "comment_id": "13",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "10",
//     "children_id": []
// },
// {
//     "comment_id": "14",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "10",
//     "children_id": []
// },
// {
//     "comment_id": "15",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "4",
//     "children_id": []
// },
// {
//     "comment_id": "16",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "4",
//     "children_id": []
// },
// {
//     "comment_id": "17",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "2",
//     "children_id": []
// },
// {
//     "comment_id": "3",
//     "comment_msg": "Firstly I watch Learnex beside that I also subscribe to Let's Talk. You both are doing great work during this lockdown period. Keep educating us with your amazing contents likewise.",
//     "likes": "10",
//     "dislikes": "2",
//     "comment_parent_id": "4",
//     "children_id": []
// }