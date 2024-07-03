const sideOpen = document.getElementById("sideOpen"); 
const sideClose = document.getElementById("sideClose"); 
const sideBar = document.querySelector(".sidebar"); 
const loginCont = document.querySelector(".login_container"); 


function setInitialOverflow() {
    if (window.innerWidth >= 830) {
        document.body.style.overflowY = 'scroll';
    } 
}

window.addEventListener("DOMContentLoaded", setInitialOverflow);
window.addEventListener("resize", setInitialOverflow);

let booleanVal = false; 

if(booleanVal){
    loginCont.style.display = 'flex'; 
}else{
    loginCont.style.display = 'none'; 
}



sideOpen.addEventListener("click", () => {
    booleanVal = false; 
    if(booleanVal){
        loginCont.style.display = 'flex'; 
}else{
        loginCont.style.display = 'none'; 
}
    

    sideBar.style.transform = 'translateX(0)';
    if (window.innerWidth < 830) {
        document.body.style.overflowY = 'hidden';
    }


});

sideClose.addEventListener("click", () => {
    sideBar.style.transform = 'translateX(-200%)';
    document.body.style.overflowY = 'scroll';
});




// Login functionalities 


const faUserBtn = document.querySelector(".fa-user"); 
const closeLogin = document.getElementById("closeLogin"); 

const faEye = document.querySelector("#eyeBtn"); 

const faEyeSlash = document.querySelector(".fa-eye-slash");

const passwordInput = document.getElementById("passwordInput"); 



faEye.addEventListener("click" , () => {
    passwordInput.type = 'text'
    faEye.style.display = 'none'; 
    faEyeSlash.style.display = 'block'; 
})
faEyeSlash.addEventListener("click" , () => {
    passwordInput.type = 'password'
    faEye.style.display = 'block'; 
    faEyeSlash.style.display = 'none'; 
})






faUserBtn.addEventListener("click" , () => {
    booleanVal = !booleanVal; 

    if(booleanVal){
        loginCont.style.display = 'flex'; 
    }else{
        loginCont.style.display = 'none'; 
    }
})

closeLogin.addEventListener("click" , () => {
    booleanVal = !booleanVal; 
    if(booleanVal){
        loginCont.style.display = 'flex'; 
    }else{
        loginCont.style.display = 'none'; 
    }
})