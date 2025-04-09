const btn = document.querySelector("button");

function random(num){

    return Math.floor(Math.random() * (num+1));

}
function A(){

    return Math.random();

}

btn.addEventListener('click',()=>{
    const color = `rgba(${random(255)}, ${random(255)} ,${random(255)}, ${A()} )`;
    document.body.style.backgroundColor=color;
});

