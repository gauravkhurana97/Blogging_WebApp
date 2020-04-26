// var element = document.getElementsByClassName("top_left");;
// const fetch = require("node-fetch");
var url = 'http://localhost:3000/messages';

// // let compStyles = window.getComputedStyle(left);
// const height = element.style.height;
// console.log(height);
// // document.getElementById('.vertical_right').style.height = compStyles.getPropertyValue('height');

const element = document.querySelector('.top_left')
const style = getComputedStyle(element);
// console.log(style.height);

document.querySelector('.vertical_right').style.height = style.height;

document.querySelector('.displaythiscontent').addEventListener("click", (ev) => {
    ev.preventDefault();
    const ele = document.querySelector('.hideme');
    ele.classList.toggle("makeinvisible");
});

const processParentData = async () => {
    const response = await fetch(url);
    return response.json()
}

(async () => {
    try {
        const parents = await processParentData();

        parents.data.comments.forEach(element => {

            console.log(element.pid);
            console.log(element.cid);

            element.gcd.forEach((gc) => {
                console.log(gc);
            })

        });

    } catch (error) {

    }
})();