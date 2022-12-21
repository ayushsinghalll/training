const {StudentDao,StudentService,Student} = require('../src/student.js')

let student
let service
let dao
beforeEach(function (){
    let s1 = new Student(111,'ayush','ayush@gmail.com')
    let s2 = new Student(112,'ajay','ajay@gmail.com')
    let s3 = new Student(113,'amit','amit@gmail.com')
    let s4 = new Student(114,'chaman','chaman@gmail.com')
    let s5 = new Student(115,'Vishnu','vishnu@gmail.com')

    student=[s1,s2,s3,s4,s4,s5]
    dao = new StudentDao()
    service=new  StudentService(dao)

})
describe('student service class being tested ',function (){
    it('should reduce the size of array', function () {
        let size = student.length
        spyOn(dao,'delete').and.callFake(function (id){
           for(let i=0;i<student.length;i++) {
               if (student[i].id === id) {
                   student.splice(i, 1)
               }
           }
           return student.length
        })
        expect(service.delete(111)).toEqual(size-1)
    });
    it('should retrieve all students ', function () {

        spyOn(dao,'findAll').and.returnValue(student)
        expect(service.findAll()).toEqual(student)
    });
})
