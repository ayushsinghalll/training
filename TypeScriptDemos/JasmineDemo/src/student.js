class Student{
    constructor(id,name,email) {
        this.id=id
        this.name=name
        this.email=email
    }
}
class StudentDao{
    delete(id){
        console.log('This method doing delete student by id')
    }
    findAll(){
        console.log("This method doing find all student")
    }
}
 class StudentService{
    constructor(dao) {
        this.dao=dao
    }
    delete=(id)=>this.dao.delete(id)

     findAll=()=>this.dao.findAll()
 }

 module.exports={Student,StudentService,StudentDao}
