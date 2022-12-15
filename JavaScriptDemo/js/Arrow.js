class Emp{
    constructor() {
        this.msg='hello'
    }
    // function1(arr){
    //     return arr.filter(function (element){
    //         return(element===this.msg)
    //     })
    // }
    arrow(arr){
        return arr.filter(element=>(element===this.msg))
    }
}
const emp1=new Emp('hello')
//console.log(emp1.function1(['hello']))
console.log(emp1.arrow(['hello']))
