function changeColor(){
    let h1=document.querySelector("#h1");
    h1.style.color = "red"

}
function addNumber(){
    let h2 = document.querySelector("h2")
    h2.innerText = Number(h2.innerText)+1;
}
function changeParagrph(){
    let p = document.querySelector(".paragraph");
    p.innerHTML = "the paragraph was changed";
    p.style.color="Green"
}
function append(){
    let h3 = document.querySelector("#h3");
    let h5 = document.createElement("h5");
    h5.innerText="created by using js";
    h5.style.color="red"
    h3.append(h5)

}