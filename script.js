var applediv = document.getElementById("apple");
var orangediv = document.getElementById("orange");
var lemondiv = document.getElementById("lemon");
var strawberrydiv = document.getElementById("strawberry");

var bodycolor = document.getElementById("body");

var appleimg = document.getElementById("appleimg");
var lemonimg = document.getElementById("lemonimg");
var orangeimg = document.getElementById("orangeimg");
var strawberryimg = document.getElementById("strawberryimg");

var appletext = document.getElementById("appletext");
var lemontext = document.getElementById("lemontext");
var strawberrytext = document.getElementById("strawberrytext");
var orangetext = document.getElementById("orangetext");

var bgimg1 = document.getElementById("bgimg1");
var bgimg2 = document.getElementById("bgimg2");
var bgimg3 = document.getElementById("bgimg3");
var bgimg4 = document.getElementById("bgimg4");

apple();

function apple() 
{
    applediv.style.width = "600px";
    orangediv.style.width = "100px";
    lemondiv.style.width = "100px";
    strawberrydiv.style.width = "100px";

    bodycolor.style.backgroundColor = "#FF7070";

    orangeimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    appleimg.style.animation = "down 1s linear 0s 1 normal forwards";

    lemontext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    appletext.style.animation = "text 1s linear 0s 1 normal forwards";
    
    bgimg1.src = "apple.png";
    bgimg2.src = "apple.png";
    bgimg3.src = "apple.png";
    bgimg4.src = "apple.png";
}
function lemon() 
{
    lemondiv.style.width = "600px";
    orangediv.style.width = "100px";
    applediv.style.width = "100px";
    strawberrydiv.style.width = "100px";

    bodycolor.style.backgroundColor = "#f7e35b";

    orangeimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    appleimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "down 1s linear 0s 1 normal forwards";

    appletext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    lemontext.style.animation = "text 1s linear 0s 1 normal forwards";

    bgimg1.src = "lemon.png";
    bgimg2.src = "lemon.png";
    bgimg3.src = "lemon.png";
    bgimg4.src = "lemon.png";


}

function strawberry() 
{
    strawberrydiv.style.width = "600px";
    applediv.style.width = "100px";
    orangediv.style.width = "100px";
    lemondiv.style.width = "100px";

    bodycolor.style.backgroundColor = "#FF6286";

    orangeimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    appleimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "down 1s linear 0s 1 normal forwards";

    appletext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    lemontext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text 1s linear 0s 1 normal forwards";

    bgimg1.src = "strawberry.png";
    bgimg2.src = "strawberry.png";
    bgimg3.src = "strawberry.png";
    bgimg4.src = "strawberry.png";
}
function orange() 
{
    orangediv.style.width = "600px";
    applediv.style.width = "100px";
    lemondiv.style.width = "100px";
    strawberrydiv.style.width = "100px"; 

    bodycolor.style.backgroundColor = "#f4a308";

    appleimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    orangeimg.style.animation = "down 1s linear 0s 1 normal forwards";

    appletext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    lemontext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text 1s linear 0s 1 normal forwards";

    bgimg1.src = "orange.png";
    bgimg2.src = "orange.png";
    bgimg3.src = "orange.png";
    bgimg4.src = "orange.png";
}