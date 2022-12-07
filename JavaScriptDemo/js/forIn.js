const employee={
    id:456,
    Name:"Ayush",
    salary:45000,
    department:{
        departmentId:56,
        name: "CS"
    },
    project:{
        id:123456,
        name:"Abbott",
        startDate:"6 Nov 2022",
        Duration: 6
    }
}
for(let i in employee){
    if(i==="project" || i==="department") {
        for (let j in employee[i]) {
            console.log(`${j}: ${employee[i][j]}`);
        }
    }
        else{
            console.log(`${i}: ${employee[i]}`);

        }

}
