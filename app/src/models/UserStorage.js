"use strict";

class UserStorage{
    static #users = {
        id:["bogyu", "양보규", "홍길동"],
        psword:["1234","1234","1111"],
        name:["양보규","양정인","김혜자"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;