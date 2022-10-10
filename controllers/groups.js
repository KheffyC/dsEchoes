const Group = require('../models/group')

module.exports = {
    index,
    new: newGroup,
    create,
}

async function index(req, res){
    const groups = await Group.find({})
    console.log(groups, ' THIS IS THE GROUPS')
    res.render('groups/index', { title: 'Groups', groups})
}

function newGroup(req, res){
    res.render('groups/new', {title: 'New Group'})
}

async function create(req, res){
    // console.log(req.user)
    req.body.user = req.user._id
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key]
    }
    try{
        let group = await Group.create(req.body)
        res.redirect('/groups')
    } catch(err){
        res.redirect('/groups/new')
        console.log(err.message)
    }
}