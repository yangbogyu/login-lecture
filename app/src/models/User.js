"use strict";

const Logger = require("../config/logger");
const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }
    
    async login(){
        const client = this.body;
        try{
            const {id, psword} = await UserStorage.getUserInfo(client.id);
            Logger.info(1123+id);
            if(id) {
                if(id === client.id && psword === client.psword){
                    return {success : true};
                } 
                return {success : false, msg:"비밀번호가 틀렸습니다."};
            }
            return {success : false, msg:"아이디가 없습니다."};
        } catch(err){
            return {success : false, err:`${err}`};
        }
         
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch(err){
            return {success : false, err:`${err}`};
        }
    }
}

module.exports = User;