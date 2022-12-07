const employee= {
    employeeId: 456,
    name: "Ayush",
    department: {
        DID:9,
        name:'IT',
        mgrID:5
    },
    salary: "26000",
    doj: new Date("2016-06-20"),

    getNumberOfServiceYears:function() {
        return (2022 - this.doj.getFullYear())
    }
}
val=employee.getNumberOfServiceYears();
console.log(`Year of Service ${val}`);

const employees=[
    {id:456,
    name:"Ayush",
    salary: 26000
    },
    {id:457,
        name:"Amit",
        salary: 26000
    },
    {id:458,
        name:"Chaman",
        salary: 26000
    }

]
for(let i=0;i<employees.length;i++){

    console.log(`Employee details are as : Id: ${employees[i].id} Name: ${employees[i].name} Salary: ${employees[i].salary}`);
}
