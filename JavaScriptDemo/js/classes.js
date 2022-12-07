let add1=document.getElementById("add")
let remove=document.getElementById("remove");
add1.addEventListener("click",add,true)
let div1=document.getElementById("div1")
sessionStorage.setItem("val",div1.className)
function add(){
    if(div1.getAttribute('class')===sessionStorage.getItem('val')){
        div1.className+='p2';
    }
    else {
        div1.className=sessionStorage.getItem("val")
    }
}
