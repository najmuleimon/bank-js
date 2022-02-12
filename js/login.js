// login 
document.getElementById("btn-login").addEventListener("click", function(){
    // get user email and password
    const userEmail = document.getElementById("user-email").value
    const userPass = document.getElementById("user-password").value

    if(userEmail == "myemail@gmail.com" && userPass == "password"){
        window.location.href = "bank.html"
    }
    else{
        document.getElementById("error-msg").innerText = "Please provide a valid email and password"
    }
})