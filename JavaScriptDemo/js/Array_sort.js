class Employee{
    constructor(id,name,salary) {
        this.id=id
        this.name=name
        this.salary=salary
    }
    getId(){
    return this.id
    }
    getName(){
        return this.name
    }
    gerSalary(){
        return this.salary
    }
    setId(id){
        this.id=id
    }
    setName(name){
        this.name=name
    }
    setSalary(salary){
        this.salary=salary
    }
}

let emp1 = new Employee(1,'Ayush',260000)
 let emp2 = new Employee(2,'Amit',26000)
 let emp3 = new Employee(3,'Chaman',290000)
 let emp4 = new Employee(4,'Ajay',56000)
 let emp5 = new Employee(5,'Vipul',36549)

const emp = [emp1,emp2,emp3,emp4,emp5]

document.getElementById('emp-form').addEventListener('submit',
    function (){
        let em=[]
        let id = document.getElementById('id').value
        let name = document.getElementById('name').value
        let salary = document.getElementById('salary').value
        let emp6 = new Employee(id, name, salary)
        em.push(emp6)
        console.log(emp6)
        console.log(em)
    })

function showAll(){
    console.log(emp);
}

function sortName(){
    let sortByNames = emp.sort(
        (a,b)=>(a.name > b.name) ?1 :(a.name<b.name)?-1:0);
    console.log(sortByNames)
}

function sortSalary(){
    let sortBySalary = emp.sort(
        (a,b)=>(a.salary>b.salary)?1:(a.salary<b.salary)?-1:0)
    console.log(sortBySalary)
}
