const myLibrary = [];

//Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, read`
    }
}

/*const theHobbit = new Book("The hobbit", "Tolkien", "2300", read);
console.log(theHobbit);*/

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

//This Button Shows The Form
const newBookBtn = document.querySelector("#newBookBtn");
newBookBtn.addEventListener("click", ()=> {
    const myForm = document.querySelector("#myForm");
    myForm.style.display = "block";
})

//Submit Button Action
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function() {
    event.preventDefault();
    addBookToLibrary();
    render();
});

//This function renders myLibrary array elements
const library = document.querySelector("#library");
function render() {
    library.innerHTML = "";
    for(let i=0; i<myLibrary.length; i++) {
    let volume = document.createElement("div");
    volume.innerHTML = myLibrary[i].info();
    library.appendChild(volume);
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete";
    removeBtn.addEventListener("click", ()=>{
        library.removeChild(volume);
    })
    volume.appendChild(removeBtn);


}
}