const Group = require('../models/group')
const User = require('../models/user')

module.exports = {
    index,
    new: newGroup,
    create,
    show,
}

async function index(req, res){
    const groups = await Group.find({}).populate('user')
    const userId = req.user._id
    console.log(groups, ' New groups')
    console.log(req.user, "user being passed in")
    res.render('groups/index', { title: 'Groups', groups, userId})
}

function newGroup(req, res){
    res.render('groups/new', {title: 'New Group'})
}

async function create(req, res){
    req.body.user = req.user._id
    let group = await Group.create(req.body)
    try{
        if (group) res.redirect('/groups')
    } catch(err){
        res.redirect('/groups/new')
        console.log(err.message)
    }
}

async function show(req, res){
    let groups = await Group.find({})
    let group = await Group.findById(req.params.id).populate('user')
    const users = await User.find({})
    res.render(`groups/show`, {group, groups, users})
}