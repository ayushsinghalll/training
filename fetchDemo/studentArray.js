class Mark{
    storemarks;
    constructor(storemarks) {
        this.storemarks=new Map()
    }
    addMarks(name,num){
        if(this.storemarks.has(name)){
            this.storemarks.set(name,[...this.storemarks.get(name),num])
        }
        else {
            this.storemarks.set(name,[num])
        }
    }

}
let newMarks = new Mark()
newMarks.addMarks('ayush',71)
newMarks.addMarks('chaman',78)
newMarks.addMarks('ayush',89)
newMarks.addMarks('chaman',77)
console.log(newMarks,this.storemarks)
