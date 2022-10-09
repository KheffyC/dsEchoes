const express = require('express')
const router = express.Router();
const groupsCtrl = require('../controllers/groups')

router.get('/', groupsCtrl.index)
router.get('/new', groupsCtrl.new)

module.exports = router;