"use strict";

const db = require("../config/db");
const logger = require("../config/logger");

class UserStorage{

    static getUserInfo(id){
        return new Promise(async (resolve, reject) =>{
            const query = "SELECT id, psword FROM users WHERE id =?;";
            db.query(query, [id],  async(err, data) =>{
                if(err)reject(`${err}`);
                else if(data[0]) {
                    resolve(data[0]);
                }
                else resolve({"id" : null, "psword" : null});
            });
        });
    }

    static async save(userInfo){
        return new Promise((resolve, reject) =>{
            const query = `INSERT INTO users(id, NAME, psword)
                        VALUES (?, ?, ?);`;
            db.query(query
                , [userInfo.id, userInfo.name, userInfo.psword],  (err) =>{
                if(err) reject(`${err}`);
                else resolve({success : true});
            });
        });
    }
    
}

module.exports = UserStorage;