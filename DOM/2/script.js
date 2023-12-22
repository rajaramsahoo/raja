const url = "https://jsonplaceholder.typicode.com/todos";
let data;
async function main(){
        try{
            let res = await axios.get(url)
             data = res.data
        console.log(data)
         creatTable(data)
        

        }
        catch (err){
            console.log(err)
        }
}
main();
function creatTable(data){
    let myTable = document.querySelector("#myTable");
    data.forEach(ele => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText= ele.userId
        let td2 = document.createElement("td");
        td2.innerText = ele.id
        let td3 = document.createElement("td");
        td3.innerText = ele.title
        let td4 = document.createElement("td");
        td4.innerText=ele.completed
        tr.append(td1, td2, td3, td4);
     myTable.append(tr);
     });
}
let btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
   myTable.replaceChildren();
   let filterData = data.filter(ele=>ele.completed);
   creatTable(filterData)

})
let not=document.querySelector("#not");
not.addEventListener("click",()=>{
   myTable.replaceChildren();
   let notCompleted = data.filter(ele => !ele.completed );
   creatTable(notCompleted)
})


// function completed(){
//     let tbody =  document.getElementById("tbody")
    

// }