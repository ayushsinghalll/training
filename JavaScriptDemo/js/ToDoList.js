
class Book{
    constructor(title,author,isbn) {
        this.title=title

    }
}

class UI{
    addBookToList(book){

        const list = document.getElementById("book-list");
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
                         <td><a href="#" class="update">update</a> </td>
                         <td><a href="#" class="delete">X</a> </td>`
        list.appendChild(row)

    }
    clearFormFields(){
        document.getElementById('title').value=''


    }

    showAlert(message,className){
        const div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div,form)
        setTimeout(function () {
            document.querySelector('.alert').remove()
        },2000)
    }

    deleteBook(target){
        if(target.className === 'delete')
            target.parentElement.parentElement.remove()
    }
/*
    updateBook(target){
        let selectedTask = target.parentElement.parentElement;

        textInput.value = selectedTask.children[0].innerHTML;
        dateInput.value = selectedTask.children[1].innerHTML;
        textarea.value = selectedTask.children[2].innerHTML;

        deleteTask(e);
    };
*/
}

class Store{

    static getBooks(){
        let books
        if(localStorage.getItem('books') === null)
        {
            books=[]
        }
        else {
            books=JSON.parse(localStorage.getItem('books'))
        }
        return books
    }

    static displayBooks(){

        const books = Store.getBooks();


        books.forEach((book)=>{
            const ui=new UI;

            ui.addBookToList(book);
        });

    }

    static addBook(book){
        const books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn){
        const books = Store.getBooks()

        books.forEach((book, index)=>{
            if(book.isbn===isbn){
                books.splice(index,1)
            }
        })
        localStorage.setItem('books', JSON.stringify(books))
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks)
document.getElementById('book-form').addEventListener('submit',function (e){
    const title=document.getElementById('title').value


    const book = new Book(title)

    Store.addBook(book)

    const ui = new UI()
    if(title === ""  ){
        ui.showAlert('Please Populate Fields', 'error')
    }
    else{
        ui.addBookToList(book)
        ui.showAlert('Your Task has been added', 'success')
        ui.clearFormFields()
    }
    e.preventDefault()
})

document.getElementById('book-list').addEventListener('click',function (e){
    const ui = new UI()
    ui.deleteBook(e.target)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
    ui.showAlert("Your Task has been removed",'success')
})

function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll("#myTable").forEach
    (function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}
