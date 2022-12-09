class Emp{
    constructor(id,carBrand,carDealer,carPrice,carBattery){
        this.id;
        this.carBrand;
        this.carDealer
        this.carPrice
        this.carBattery
    }
}
const empForm=document.getElementById("empForm");
const empList = document.getElementById("empList");
//creating emps array
const emps=[];

//creating emp -- object  -- data members --id and empname
const emp={
    id:0,
    carBrand:'',
    carDealer:'',
    carPrice:0,
    carBattery:0

};

//calling / executing loadEventListeners --
loadEventListeners();

//on line 19 we are defining the function loadEventListeners
function loadEventListeners(){
    //whenever we refresh the page ,we want this eventhandler getEmps -this will load emps from localstorage
    document.addEventListener('DOMContentLoaded',getEmps);

    empForm.addEventListener("submit",addEmp);

}
//event handlers -- getting emps from the local storage
function getEmps(){
    console.log('in get emps')
    let emps;

    if(localStorage.getItem("emps")===null){
        emps=[];
    }
    else{

        emps=JSON.parse(localStorage.getItem("emps"));

    }
    emps.forEach(function(emp){


        let li=document.createElement("li");

        li.appendChild(document.createTextNode(JSON.stringify(emp)));

        const link = document.createElement('a');

        li.appendChild(link);

        empList.appendChild(li);
        console.log('emplist appended ..')


    })
}

function addEmp(e){
    console.log('in add form');
    let carBrand = document.forms[0]["carBrand"];
    carBrand=carBrand.value;
    console.log(carBrand);
    let id = document.forms[0]["id"];
    id=id.value;
    console.log(id);
    let carDealer=document.forms[0]["carDealer"]
    carDealer=carDealer.value
    let carPrice=document.forms[0]["carPrice"]
    carPrice=carPrice.id
    let carBattery=document.forms[0]["carBattery"]
    carBattery=carBattery.value
    emp.id=id;
    emp.carBrand=carBrand;
    emp.carDealer=carDealer
    emp.carPrice=carPrice
    emp.carBattery=carBattery



    console.log(emp);

    storeEmpInLocalStorage(emp);
    e.preventDefault();

}


function storeEmpInLocalStorage(emp) {
    console.log('in store function')
    let emps;
    if (localStorage.getItem("emps") === null) {
        emps = [];
    } else {
        emps = JSON.parse(localStorage.getItem("emps"));
    }
    emps.push(emp);
    localStorage.setItem("emps", JSON.stringify(emps));
    console.log('added emps to local storage')
}
