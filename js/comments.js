const fs = require("fs");
const fetch = require("node-fetch");
var biggerresponse = [];

const processParentData = async (blog_id) => {
    const response = await fetch(`http://localhost:3000/api/v1/blogscomment/${blog_id}/comments`);
    return response.json()
}


// 5ea44eace8dfa731fc287d93
const processChildData = async (pare_id) => {
    const response = await fetch(`http://localhost:3000/api/v1/comments/firstchild/${pare_id}`);
    return response.json()
}

// (async () => {
//     try {
//         const data = await processChildData("");
//         console.log(data);
//     } catch (error) {
//         throw error
//     }
// })();


// processData("5ea44bd7a66b824e204883c7").then((data) => {
//     console.log(data) // Will print "101"
// }).catch((error) => {
//     console.log(error)
// })

// (async () => {

//     const p = await getComm("5ea44bd7a66b824e204883c7");
//     console.log(p);


// })();





(async () => {
    try {
        const parents = await processParentData("5ea44bd7a66b824e204883c8");
        console.log(parents);

        for (const parent of parents.data.comments) {
            var pid = parent._id;
            if (parent.first_childrens.length == 0) {
                biggerresponse.push({
                    pid
                })
            } else {
                for (const dir_child of parent.first_childrens) {
                    var cid = dir_child._id;
                    const child = await processChildData(cid);
                    console.log(child);
                    if (child.data.comments.nextChild.length == 0) {
                        biggerresponse.push({
                            pid,
                            cid
                        });
                    } else {
                        biggerresponse.push({
                            pid,
                            cid,
                            gcd: child.data.comments.nextChild.map((el) => el._id)
                        })
                    }
                }
            }
            await writeFilePro('reviews.txt', JSON.stringify(biggerresponse));
        }
    } catch (error) {

    }
})();

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, err => {
            if (err) reject('Could not write file 😢');
            resolve('success');
        });
    });
};

(async () => {

})();

// console.log(biggerresponse);







//         const parent = await getComm("5ea44bd7a66b824e204883c7");
//         parent.data.comments.forEach((parent) => {
//             var pid = parent._id;
//             if (parent.first_childrens.size == 0) {
//                 biggerresponse.push({
//                     pid
//                 });
//             } else {
//                 parent.first_childrens.forEach(async (dir_child) => {
//                     var cid = dir_child._id;
//                     const child = await getComm(cid);
//                     if (child.data.comments.nextChild.size == 0) {
//                         biggerresponse.push({
//                             pid,
//                             cid
//                         });
//                     } else {
//                         child.data.comments.nextChild.forEach((gcd) => {
//                             biggerresponse.push({
//                                 pid,
//                                 cid,
//                                 gcd: gcd._id
//                             });
//                         })
//                     }
//                 })
//             }
//             console.log(biggerresponse);
//         })
//     } catch (err) {
//         console.log('ERROR 💥');
//     }
// }