document.getElementById("login-box").style.display = "none";
let loading = document.getElementById("loading-div");
loadingL = document.getElementById("loading-divL");
let added = JSON .parsa(localStorage.getItem("uese"))
console.log(added);
let name = document.getElementById("none")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
function add(ev){
    ev.preventDefault()
    let data = {
        name: name.value,
        email: email.value,
        pass: pass.value
    }
    if(added == null)
       added = [],
       added.push(data)
       localStorage.setItem("uese, JSON.stringify(added")
    }else{
        added.push(data)
        localStorage.setItem("uese, JSON.stringify(added")
    }
loading.style.display = "none";
loadingL.style.display = "none";

function loginPage() {
    
    document.getElementById("sign-up-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}


function signUpPage() {
    document.getElementById("sign-up-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";

}

function signUp() {
    loadingL.style.display = "block";
    document.getElementById("sign-up-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
    setTimeout(() => {
        // document.getElementById("sign-up-box").style.display = "block";
        // document.getElementById("login-box").style.display = "none";
        loadingL.style.display = "none";
    }, 3000);
}

function login() {
    loading.style.display = "block";
    setTimeout(() => {
        // document.getElementById("sign-up-box").style.display = "none";
        // document.getElementById("login-box").style.display = "block";
        loading.style.display = "none";

    }, 3000);
}