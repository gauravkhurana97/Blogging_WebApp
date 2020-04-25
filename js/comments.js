const fetch = require("node-fetch");
var biggerresponse = [];



// const getcomments = as
const getcomments = (callback) => {

    fetch('http://localhost:3000/api/v1/comments/5ea3d04668b96725600f5cec')
        .then(response => response.json())
        .then(data => {

            data.data.comments.first_childrens.forEach(element => {
                fetch(`http://localhost:3000/api/v1/comments/firstchild/${element._id}`).then(response => response.json())
                    .then(data2 => {



                        grandchild = data2.data.comments.nextChild.map(el => el._id);

                        var completemsg = {
                            parent: data.data.comments._id,
                            child: element._id,
                            grandchild
                        }

                        // console.log(completemsg);
                        biggerresponse.push(completemsg);
                        callback(biggerresponse);
                    });

            });


        });

}

getcomments((data) => {
    console.log(data);
});
// (async () => {
//     try {
//         await getcomments();
//         console.log(biggerresponse);
//     } catch (err) {
//         console.log('ERROR 💥');
//     }
// })();


// // console.log(biggerresponse);