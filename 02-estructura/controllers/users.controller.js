import { getUsersFromDB } from '../services/users.service.js';


export const getUsers = () => {

    const users = getUsersFromDB();

    for(let i = 0; i < users.length; i++) {
        users[i].name = users[i].name.toUpperCase();
    }

    return users;
}