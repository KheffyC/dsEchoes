const express = require('express')
const router = express.Router();
const isLoggedIn = require('../config/auth')
const groupsCtrl = require('../controllers/groups');

router.get('/', isLoggedIn ,groupsCtrl.index)
router.get('/new', isLoggedIn, groupsCtrl.new)
router.post('/',isLoggedIn, groupsCtrl.create)
router.get('/:id', isLoggedIn, groupsCtrl.show)

module.exports = router;