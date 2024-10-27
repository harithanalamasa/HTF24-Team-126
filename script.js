document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginSection = document.getElementById("login-section");
    const signupSection = document.getElementById("signup-section");
    const mainContent = document.getElementById("main-content");

    // Switch between login and signup forms
    window.toggleForm = function(formType) {
        if (formType === 'signup') {
            signupSection.style.display = "block";
            loginSection.style.display = "none";
        } else {
            loginSection.style.display = "block";
            signupSection.style.display = "none";
        }
    };

    // Handle Signup
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;

        if (username && password) {
            localStorage.setItem("user", JSON.stringify({ username, password }));
            document.getElementById("signup-message").innerText = "Signup successful! Please log in.";
            toggleForm("login");
        }
    });

    // Handle Login
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && username === storedUser.username && password === storedUser.password) {
            loginSection.style.display = "none";
            mainContent.style.display = "block";
        } else {
            document.getElementById("login-message").innerText = "Invalid username or password.";
        }
    });
});

// Tab switching function
function openTab(event, tabId) {
    let tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) content.style.display = "none";

    let tabs = document.getElementsByClassName("tab");
    for (let tab of tabs) tab.classList.remove("active");

    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Basic add book function
const addBookForm = document.getElementById("add-book-form");
const bookList = document.getElementById("book-list");

addBookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const rating = document.getElementById("rating").value;

    const newBook = document.createElement("div");
    newBook.classList.add("book-list-item");
    newBook.innerText = `${title} by ${author} - ${genre}, Rating: ${rating}`;
    bookList.appendChild(newBook);

    addBookForm.reset();
});
