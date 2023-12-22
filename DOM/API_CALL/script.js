const url = "https://jsonplaceholder.typicode.com/todos";
let data = ""
 function hitAPI(){
    axios.get(url)
   .then((res)=>{
    data=res.data
    console.log(data)
    domDATA(data);
    
   })
   .catch((err)=>{
    console.log(err)
   })
 }
 hitAPI()

 function domDATA(data){
    data.forEach(element => {
        let div = document.createElement("div")
        let p1 = document.createElement("p")
        p1.innerText = `User ID:${element.userId}`
        let p2 = document.createElement("p")
        p2.innerText = element.id
        let p3 = document.createElement("p")
        p3.innerText = element.title
        let p4 = document.createElement("p")
        p4.innerText = element.completed

        div.append(p1, p2 ,p3, p4)
        document.getElementById("root").appendChild(div)

        
    });

 }


 