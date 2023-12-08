let end = document.querySelector(".end");
let line = document.getElementsByClassName("line");
let fill = document.getElementsByClassName("fill");
let img = document.querySelector(".img");
let imgIcon = document.querySelector(".img-icon");
let lineHeart = document.querySelector("._1");
let fiilHeart = document.querySelector("._2");

let flag = 1;
img.addEventListener("dblclick",function(){
    if(flag == 1){
        imgIcon.style.display = "block";
        lineHeart.style.display = "none";
        fiilHeart.style.display = "block";
        setTimeout(function(){
            imgIcon.style.display = "none";
        },1000);
        flag = 0;
    }
    else{
        fiilHeart.style.display = "none";
        lineHeart.style.display = "block";
        flag = 1;
    }
})

end.addEventListener("click", function (val) {
    let target = val.target.getAttribute("class");
    if (target.includes("_1") ){
        line[0].style.display = "none";
        fill[0].style.display = "block";
    }
    else if (target.includes("_2")) {
        line[0].style.display = "block";
        fill[0].style.display = "none";
    } 
    else if (target.includes("_3")) {
        line[1].style.display = "none";
        fill[1].style.display = "block";
    } 
    else if (target.includes("_4")) {
        line[1].style.display = "block";
        fill[1].style.display = "none";
    } 
    else if (target.includes("_5")) {
        line[2].style.display = "none";
        fill[2].style.display = "block";
    }
    else if (target.includes("_6")) {
        line[2].style.display = "block";
        fill[2].style.display = "none";
    } 
});

