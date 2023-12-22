let h1 = document.querySelector("h1");
h1.addEventListener("click",()=>{
    console.log("h1 has been clicked")
    h1.innerText = "hela au"
    h1.style.color = "red"
})
let input = document.querySelector("input");
input.addEventListener("click",(e)=>{
    console.log(e.target.value)
})