const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')
const isLoggedIn = require('../config/auth')

router.post('/groups/:groupid/posts/:postid/comments', commentsCtrl.create)

module.exports = router