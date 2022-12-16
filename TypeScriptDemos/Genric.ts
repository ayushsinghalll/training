function display<T>(arg:T):any{
    console.log(typeof arg)
}
display("Hii")
display(4566)

function add<T,A>(arg2,arg):any{
    console.log("Add values ",arg2+arg)

}
add(4,5)
add("Ayush","singhal")


class Genric<K,V>{
    private arr:K[]=[]
    private arr2:V[]=[]

    add(item:K,item2:V){
        this.arr.push(item)
        this.arr2.push(item2)
    }

    get():K[]{
        return this.arr
    }

    get2():V[]{
        return  this.arr2
    }

   public map:Map<K,V>


}

let str = new Genric<string,number>()
str.add("ayush",45)
console.log(`${str.get()} and ${str.get2()}`)

let str2 = new Genric<string,boolean>()
str2.add("ayush",  Boolean(4) )
console.log(`${str.get()} and ${str.get2()}`)

let str3 = new Genric<number,number>()
str3.add(45,45)
console.log(`${str3.get()} and ${str3.get2()}`)









class Gen<k,v>{
    private map:Map<k,v>;
    constructor(map:Map<k,v>){
        this.map=map;
    }
    setMap(map:Map<k,v>){
        this.map=map;
    }
    getMap(){
        return this.map;
    }
}
let map= new Map<string,number>();
map.set("id",1);
map.set("num",1234);
let m1= new Gen<string,number>(map);
let map1= new Map<string,boolean>();
map1.set("id",true);
map1.set("ispossible",false);
let m2= new Gen<string,boolean>(map1);


















