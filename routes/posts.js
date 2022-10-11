const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/posts')
const isLoggedIn = require('../config/auth')

router.post('/groups/:id/posts', isLoggedIn, postsCtrl.create)

module.exports = router;