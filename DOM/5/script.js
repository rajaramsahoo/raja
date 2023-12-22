
let btn = document.querySelector("#btn");
let para =document.querySelector("#para");
btn.addEventListener("click",()=>{
    if(para.style.display != "none"){
        para.style.display = "none"
    }
    else(para.style.display = "block")
    
})

para.addEventListener("mouseover",()=>{
    alert("move the mouse")
})

// function toggleHide(){
//     let btn = document.querySelector("#btn");
//     if(para.style.display != "none"){
//         para.style.display = "none"
//     }
//     else(para.style.display="block")
// }