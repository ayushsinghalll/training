class Car{
    constructor(id,brand,dealer,price,batteryLife) {
        this.id
        this.brand
        this.dealer
        this.price
        this.batteryLife
    }
}

const carForm=document.getElementById("carForm")
const carList=document.getElementById("carList")

// creating an array
const cars=[]

// creating empty object

const car={id:0, brand:'',dealer:'',price:0,batteryLife:0}

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getCar)
    carForm.addEventListener("submit",addCar)
}

function getCar(){
    console.log('in get car')
    let cars
    if(localStorage.getItem("cars")===null){
        cars=[];
    }
    else{
        cars=JSON.parse(localStorage.getItem("cars"));
    }
    cars.forEach(function (car){
        let li=document.createElement("li")
        li.appendChild(document.createTextNode(JSON.stringify(car)))
        const link = document.createElement('a')
        li.appendChild(link)
        carList.appendChild(li)
        console.log("CarList appended")
    })
}

function addCar(e){
    console.log('in add form')
    let carId=document.forms[0]["input1"]
    carId=carId.value
    console.log(carId)
    let carBrand=document.forms[0]["input2"]
    carBrand=carBrand.value
    let carDealer=document.forms[0]["input3"]
    carDealer=carDealer.value
    let carPrice=document.forms[0]["input4"]
    carPrice=carPrice.value
    let carBattery=document.forms[0]["Input5"]
    carBattery=carBattery.value
    car.carId=carId
    car.carBrand=carBrand
    car.carDealer=carDealer
    car.carPrice=carPrice
    car.carBattery=carBattery
    console.log(car)
    storeCarInLocalStorage(car);
    e.preventDefault();
}
function storeCarInLocalStorage(car) {
    console.log('in store function')
    let cars;
    if (localStorage.getItem("cars") === null) {
        cars = [];
    } else {
        cars = JSON.parse(localStorage.getItem("cars"));
    }
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));
    console.log('added cars to local storage')
}
