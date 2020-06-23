const loader = document.querySelector(".loading");
const root = document.querySelector("#root");
function fadeLoader() {
    loader.classList.add("fade-loader");
    setTimeout(()=>{ loader.classList.add("remove") }, 1000);
}
function fadeInRoot() {
    root.classList.remove("remove")
}
window.onload = function(){
    fadeLoader();
    setTimeout( function(){ fadeInRoot(); }, 1000 );  
    console.log("document loaded")
};

