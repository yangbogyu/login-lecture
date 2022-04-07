"use strict";

//인터페이스 역활 DOM 
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    if (!id.value) return alert("아이디 입력해랑");
    if (!psword.value) return alert("비밀번호 입력해랑");

    const req = {
        id : id.value,
        psword : psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
        } else {
            if(res.err) return alert(res.err);
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("로그인중 에러"));
    });
}

