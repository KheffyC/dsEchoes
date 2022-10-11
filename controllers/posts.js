const Group = require('../models/group')


module.exports = {
    create,
} 

async function create(req, res){
    let group = await Group.findById(req.params.id).populate('user');
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(req.body, 'LJSNDLVJN')
    group.posts.push(req.body)
    group.save(function(err) {
            res.redirect(`/groups/${group.id}`)
        })
}