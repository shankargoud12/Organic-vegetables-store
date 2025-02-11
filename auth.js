//User Registeration
function registerUser() {
    let name = document.getElementById("register-name").Value;
    let email =  document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;

    if (!name || !email || !password) {
        alert("All fields are required");
        return;
    }

    let user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registeraton successful ! Now login.");
    window.location.href = "login.html"; //Redirect to login page
}

// User Login
function loginUser() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email && savedUser.password === password)
{
        alert("login successfull");

localStorage.setItem("loggedInUser", savedUser.name);
        window.location.href = "index.html"; //Redirect to home page
    }  else {
          alert("Invalid credentials. Try again.");
    }
}      

