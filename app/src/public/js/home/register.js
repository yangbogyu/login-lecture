"use strict";

//인터페이스 역활 DOM 
const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

console.log("test");

registerBtn.addEventListener("click", register);

function register(){
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
    };
    console.log(req);
    fetch("/register", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("회원가입 중 에러"));
    });
}

