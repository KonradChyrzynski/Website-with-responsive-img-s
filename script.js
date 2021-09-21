const shape1 = document.querySelector(".img")
const sectionLeft = document.querySelector(".section--left");
let bigScreanImg = false;
function changeImg(){
    let img1 = document.createElement('img');
    img1.src = "imgs/shape1.2.png";
    if(window.innerWidth >= 1200 && window.innerHeight > 760 && bigScreanImg == false){ // this code changes img when screan is big
        bigScreanImg = true;
        shape1.remove();
        img1.position = "absolute"
        img1.classList.add("shape1")
        img1.marginLeft = 0 + "%";
        document.body.appendChild(img1);
    } else if  (window.innerWidth <= 1200 || window.innerHeight <= 760) { // this code changes img when screan width or height is small
        bigScreanImg = false;
        const shape1smallDev = document.querySelector(".shape1");
        if(shape1smallDev != null) {
            shape1smallDev.remove();
        }
        const divimg = document.createElement("div");
        divimg.classList.add("img");
        divimg.appendChild(shape1);
        sectionLeft.appendChild(shape1);
    } 
}

window.addEventListener('resize', changeImg);
window.addEventListener('DOMContentLoaded', changeImg);