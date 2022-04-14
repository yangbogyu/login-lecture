"use strict";

const Logger = require("../config/logger");
const UserStorage = require("./UserStorage");
const crypto = require('crypto');
const createSalt = () =>
    new Promise((resolve, reject) => {
        crypto.randomBytes(4, (err, buf) => {
            if (err) reject(err);
            resolve(buf.toString('base64'));
        });
    });
const createHashedPassword = (plainPassword) =>
    new Promise(async (resolve, reject) => {
        const salt = await createSalt();
        crypto.pbkdf2(plainPassword, salt, 9999, 64, 'sha512', (err, key) => {
            if (err) reject(err);
            resolve({ password: key.toString('base64'), salt });
        });
    });
class User{
    constructor(body){
        this.body = body;
    }
    
    async login(){
        const client = this.body;
        try{
            const {id, psword} = await UserStorage.getUserInfo(client.id);

            const { password, salt } = await createHashedPassword(psword);
            console.log(password, salt);
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