
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "ishan" && password === "joshi") {
        alert("You have successfully logged in as " + username);
        location.href = "admin.html";
    }
    else if (username === "amit" && password === "krishna") {
        alert("You have successfully logged in as " + username);
        location.href = "admin.html";
    }
    else {
        alert("                              Incorrect Username/Password\n                                         Please Try Again");
        
        location.reload();
    }
})