
import { users } from '../db/memory.js';

export const getUsersFromDB = () => {

    // SELECT * FROM users;

    return users;
}