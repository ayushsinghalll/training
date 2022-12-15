enum size{
    small='small',large='large',medium='medium'
}

enum topping{
    cheese='cheese',veges='veges',paneer='paneer'
}

interface Pizza{
    id : number,
    base : String,
    size,
    topping
}

let customer1:Pizza
let customer2:Pizza

customer1={
    id:1,
    base:'bread',
    size:size.large,
    topping:topping.veges
}

customer2={
    id:2,
    base:'bread',
    size:size.medium,
    topping:topping.cheese
}

let customer:Pizza[]=[customer1,customer2]

for (let i in customer)
{
    console.log(customer[i])
}

function outForDelivery(customer: Pizza[]){
    for (let i in customer) {
        switch (customer[i].topping) {
            case topping.paneer:
                console.log("Your pizza is out for delivery and topping is " + topping.paneer);
                break
            case topping.veges:
                console.log("Your pizza is out for delivery and topping is " + topping.veges);
                break
            case topping.cheese:
                console.log("Your pizza is out for delivery and topping is " + topping.cheese);
                break
            default:
                console.log("No Pizza is Out for delivery")
        }
    }
}

outForDelivery(customer)



let mess = 'Hello This is first file'
console.log(mess)

function addNumber(x:number,y:number):number{
    return x+y
}
console.log(addNumber(5,6))

let m1:string='hii'

let greeting = (name,msg) =>{
    console.log(`${msg}  ${name}`)
}
greeting('Ayush','GoodAfterNoon')
