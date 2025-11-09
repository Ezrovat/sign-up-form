const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

password.addEventListener("input", () => password.setCustomValidity(""));
confirmPassword.addEventListener("input", () => confirmPassword.setCustomValidity(""));



document.querySelector("form").addEventListener("submit", (event) => {    
    
    
    if(password.value.length===0) {
        password.setCustomValidity("Inserisci la password");
        event.preventDefault();
    }
    if(confirmPassword.value.length===0) {
        confirmPassword.setCustomValidity("Conferma la password");
        event.preventDefault();
    }

    if(password.value!=confirmPassword.value){
        event.preventDefault();
        confirmPassword.setCustomValidity("La password non corrisponde");
    }
} );