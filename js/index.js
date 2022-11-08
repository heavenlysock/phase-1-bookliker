// document.addEventListener("DOMContentLoaded", function() {});


const API = "http://localhost:3000/books"

const renderBooks = () => {
fetch(API)
 .then(response => response.json())
 .then(booksData => {
    booksData.forEach(book => {
        const li = document.createElement("li");
        const title = document.createElement("h1");
        const ul = document.getElementById("list")

        title.textContent = book.title

        li.append(title)
        ul.append(li)

        ul.addEventListener('click', (e) => {
            e.preventDefault()
            debugger
        
        
        const showPanel = document.getElementById('show-panel')
        const thumbnail = document.createElement("img");
        const description = document.createElement("h2");
        const author = document.createElement("h3");
        const users = document.createELement("p");

        thumbnail.src = book.img_url
        thumbnail.alt = book.title
        description.textContent = book.description
        author.textContent = book.author
        users.textContent = book.users

        showPanel.append(thumbnail, description, author, users)
        
        
        
        
        })
    })
 }














// const RenderDetails = () => {
//     const listPanel = document.getElementById("list-panel");
//     const showPanel = document.getElementById("show-panel");
    
//     listPanel.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e);
//     const bookTitle = document.createElement("h1");
//     const bookSubtitle = document.createElement("h2");
//     })
//     }
    