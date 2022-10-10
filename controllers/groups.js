const Group = require('../models/group')

module.exports = {
    index,
    new: newGroup,
    create,
}

async function index(req, res){
    const groups = await Group.find({})
    res.render('groups/index', { title: 'Groups', groups})
}

function newGroup(req, res){
    res.render('groups/new', {title: 'New Group'})
}

async function create(req, res){
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key]
    }
    let group = await Group.create(req.body)
    try{
        res.redirect('/groups')
    } catch(err){
        res.redirect('/groups/new')
        console.log(err.message)
    }
    console.log(req.body, " THIS IS REQ BODY")
    console.log(group, " THIS IS THE NEW GROUP")
}