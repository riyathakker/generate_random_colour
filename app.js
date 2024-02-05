let btn = document.querySelector('button');
let div = document.querySelector('div');
let h2 = document.querySelector('h2');
btn.addEventListener("click", function(){
    let rc=randomcolour();
    div.style.backgroundColor = rc;
    h2.innerText=rc;
});
function randomcolour(){
    let red = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
   let color = `rgb(${red},${green},${blue})`;
   return color;
}

