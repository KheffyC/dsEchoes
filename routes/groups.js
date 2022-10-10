const express = require('express')
const router = express.Router();
const isLoggedIn = require('../config/auth')
const groupsCtrl = require('../controllers/groups');
const group = require('../models/group');

router.get('/', isLoggedIn ,groupsCtrl.index)
router.get('/new', isLoggedIn, groupsCtrl.new)
router.post('/', groupsCtrl.create)

module.exports = router;