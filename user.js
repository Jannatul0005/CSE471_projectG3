
const express = require('express');

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUserInfo);
router.delete('/delete/:id', verifyToken,deleteUser);
router.get('/login', login);
router.get('/register', register);

router.get('/logout', logout);       
module.exports = {
    router
};
