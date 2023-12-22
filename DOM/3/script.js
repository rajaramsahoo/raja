let url = "https://jsonplaceholder.typicode.com/users"
async function main(){
   try {
     let res = await axios.get(url);
    //  let data = res.data
    console.log(res.data);
    creatTable(res.data)

   }
   catch (err){
    console.log(err)
   }
}
main()
function creatTable(data){
    let myTable = document.querySelector("#myTable");
    data.forEach(ele => {
        let tr =  document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText=ele.id
        let td2 = document.createElement("td");
        td2.innerText=ele.name
        let td3 = document.createElement("td")
        td3.innerText=ele.username
        let td4 = document.createElement("td")
        td4.innerText=ele.email
        let td5 = document.createElement("td")
        td5.innerText=ele.address.street
        let td6 = document.createElement("td")
        td6.innerText=ele.address.geo.lng
        let td7 = document.createElement("td")
        td7.innerText=ele.address.geo.lat
        let td8 = document.createElement("td")
        td8.innerText=ele.phone
        let td9 = document.createElement("td")
        td9.innerText=ele.website
        let td10 = document.createElement("td")
        td10.innerText=ele.company.name;
        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10);
        myTable.append(tr)
        
    });
   
}
for (let i=0;i<=10 ;i++){
    let td
}