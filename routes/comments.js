const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments')
const isLoggedIn = require('../config/auth')

router.post('/groups/:groupid/posts/:postid/comments', commentsCtrl.create)
router.delete('/groups/:groupid/posts/:postid/comments/:commentsid', commentsCtrl.delete)

module.exports = router