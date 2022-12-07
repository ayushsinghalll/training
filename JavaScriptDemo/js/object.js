class employee{
    constructor(name,department,salary) {
        this.name=name;
        this.department=department
        this.salary=salary
    }
    get name(){
        return this._name
    }
    set name(val){
        this._name=val;
    }
    get department(){
        return this._department
    }
    set department(val){
        this._department=val
    }
    get salary(){
        return this._salary
    }
    set salary(val){
        this._salary=val
    }
    display(){
        console.log(`Name: ${this.name} Department: ${this.department} Salary: ${this.salary}`)
    }
}
let emp1=new employee("Ayush","CS",26000)
emp1.display()

let emp2=new employee()
emp2.name="Amit"
emp2.department="IT"
emp2.salary=26000
console.log(emp2.name)
console.log(emp2.department)
console.log(emp2.salary)
