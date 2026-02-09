// let inputBox = document.getElementById("input-box");
// let passwordInput = document.getElementById("password");
// let message = document.getElementById("message");
// let indicator = document.querySelector(".indicator");
// let icon = document.querySelector("#input-box i");

// passwordInput.addEventListener("input", ()=>{
//     if(passwordInput.value.length > 0){
//         message.style.display = "block";
//     }else{
//         message.style.display = "none";
//     }

//     if(passwordInput.value.length <= 4){
//         indicator.innerText = "weak";
//         passwordInput.style.borderColor = "#ff4757";
//         message.style.color = "#ff4757";
//         icon.style.color = "#ff4757";
//     }
//     else if(passwordInput.value.length <= 8){
//         indicator.innerText = "medium";
//         passwordInput.style.borderColor = "#ffa502";
//         message.style.color = "#ffa502";
//         icon.style.color = "#ffa502";
//     }
//     else{
//         indicator.innerText = "strong";
//         passwordInput.style.borderColor = "#2ed573";
//         message.style.color = "#2ed573";
//         icon.style.color = "#2ed573";
//     }

//     if(passwordInput.value.length < 8){
//         icon.style.visibility = "hidden";
//     }else{
//         icon.style.visibility = "visible";
//     }


// })