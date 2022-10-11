const Group = require('../models/group')

module.exports = {
    index,
    new: newGroup,
    create,
    show,
}

async function index(req, res){
    const groups = await Group.find({}).populate('user')
    res.render('groups/index', { title: 'Groups', groups})
}

function newGroup(req, res){
    res.render('groups/new', {title: 'New Group'})
}

async function create(req, res){
    req.body.user = req.user._id
    try{
        let group = await Group.create(req.body)
        res.redirect('/groups')
    } catch(err){
        res.redirect('/groups/new')
        console.log(err.message)
    }
}

async function show(req, res){
    let group = await Group.findById(req.params.id).populate('user')
    res.render(`groups/show`, {group})
}