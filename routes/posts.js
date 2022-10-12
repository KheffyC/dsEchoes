const express = require('express')
const router = express.Router()
const postsCtrl = require('../controllers/posts')
const isLoggedIn = require('../config/auth')

router.post('/groups/:groupid/posts', isLoggedIn, postsCtrl.create)
router.get('/groups/:groupid/posts/:postid/edit',isLoggedIn, postsCtrl.edit)
router.put('/groups/:groupid/posts/:postid',isLoggedIn, postsCtrl.update)
router.delete('/groups/:groupid/posts/:postid',isLoggedIn, postsCtrl.delete)

module.exports = router;