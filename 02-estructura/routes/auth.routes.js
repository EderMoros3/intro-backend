import { Router } from 'express';

import { getUsers } from '../controllers/users.controller.js';

const router = Router();

router.get('/users', (req, res) => {
    const users = getUsers();
    res.json(users);
})

export default router;