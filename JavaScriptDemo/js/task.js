const task = {
    addItem:function(name){
        console.log("Item is add"+ name);
    },
    removeItem:function(id){
        console.log("Remove Item" + id);
    },
    checkItem:function (){
        console.log("CheckOut Item");
    }
}
task.addItem("Cookie");
task.checkItem(5);
task.removeItem();
