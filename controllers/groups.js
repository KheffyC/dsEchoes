const Group = require('../models/group')
const User = require('../models/user')

module.exports = {
    index,
    new: newGroup,
    create,
    show,
    delete: deleteGroup,
    // update,
}

async function index(req, res){
    const groups = await Group.find({}).populate('user')
    const userId = req.user._id
    res.render('groups/index', { title: 'Groups', groups, userId})
}

function newGroup(req, res){
    res.render('groups/new', {title: 'New Group'})
}

async function create(req, res){
    req.body.user = req.user._id
    let group = await Group.create(req.body)
    group.users.push(req.user._id)
    try{
        if (group){
            group.save(function(err){
                res.redirect(`/groups/${group._id}`,)
            })
    }
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

async function deleteGroup(req, res){
    const group = await Group.findOneAndDelete({_id: req.params.id, user: req.user._id})
    if(group){
        res.redirect(`/groups`)
    }
}

// async function update(req, res){
//     let group = await Group.findById(req.params.id).populate({path: 'users', match: {_id: req.user._id}})
//     try{
//         if(group){
//             if (!group) return res.redirect(`/groups/${group._id}`);

//             group.users.push(req.user.id)
//             group.save(function(err){
//                 res.redirect(`/groups/${group._id}`,)
//             })
//         }
//     } catch(err){
//         console.log(err.message)
//     }
// }