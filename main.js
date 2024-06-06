var enlargeBtn = document.querySelector(".Enlarge");
var shrinkBtn = document.querySelector(".Shrink");
var information = document.querySelector(".info");

function EnlargeFunction(){
    information.classList.remove("smallest");
    information.classList.add("biggest");
}

function ShrinkFunction(){
    information.classList.add("smallest");
    information.classList.remove("biggest");
}

enlargeBtn.onclick = EnlargeFunction;

shrinkBtn.onclick = ShrinkFunction;