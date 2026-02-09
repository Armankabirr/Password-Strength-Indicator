let inputBox = document.getElementById("input-box");
let passwordInput = document.getElementById("password");
let message = document.getElementById("message");
let indicator = document.querySelector(".indicator");
let icon = document.querySelector("#input-box i");

passwordInput.addEventListener("input", ()=>{
    if(passwordInput.value.length > 0){
        message.style.display = "block";
    }else{
        message.style.display = "none";
    }

    if(passwordInput.value.length <= 4){
        indicator.innerText = "weak";
    }
    else if(passwordInput.value.length <= 8){
        indicator.innerText = "medium";
    }
    else{
        indicator.innerText = "strong";
    }
})