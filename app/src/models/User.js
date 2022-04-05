"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }
    
    login(){
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id);

        if(id) {
            if(id === body.id && psword === body.psword){
                return {success : true};
            } 
            return {success : false, msg:"비밀번호가 틀렸습니다."};
        }
        return {success : false, msg:"아이디가 없습니다."};
    }
}

module.exports = User;