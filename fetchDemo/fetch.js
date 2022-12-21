async function fetchStudent(){
    let response= await fetch('post.json')
    let data = await response.json()
    console.log("using get method")
    console.log(data)
}

let data1={
    title:"a angular book",
    body:"a very popular",
    user_id:89
}

async function post(){
    let response= await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body: JSON.stringify(data1),
        headers: {"Content-type":"application/json"}
    })
    let data = await response.json()
    console.log(data)
}
fetchStudent()
post()
