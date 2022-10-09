const Group = require('../models/group')

module.exports = {
    index,
    new: newGroup,
}

async function index(req, res){
    const groups = await Group.find({})
    res.render('groups/index', { title: 'Groups', groups})
}

function newGroup(req, res){
    res.render('groups/new', {title: 'New Group'})
}