//Assigment 1
let div1=document.getElementById("div1")
let h2=document.createElement("h1")
h2.innerText="Inside Div"
div1.after(h2)

//Assigment 2
let list1=document.createElement("ul")
list1.id="list1"
let arr=["Home","AboutUs","Contact"]
let nodes=arr.map(
    e=>{
        let listItem=document.createElement('li')
        listItem.textContent=e
      list1.append(listItem)
    }
)
document.body.appendChild(list1)

//Assigment 3
let h1=document.createElement("h1")
h1.innerText="Before Adding Method"
list1.before(h1)

