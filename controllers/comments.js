const Group = require('../models/group')

module.exports = {
    create,
    delete: deleteComment,
}

async function create(req, res){
    let group = await Group.findById(req.params.groupid).populate('user')
    try{
        if(group){
            let post = group.posts.id(req.params.postid)
            req.body.user = req.user._id;
            req.body.userName = req.user.name;
            req.body.userAvatar = req.user.avatar;
            post.comments.push(req.body)
            group.save(function(err) {
                res.redirect(`/groups/${group.id}`)
            })
        }
    } catch(err){
        console.log(err.message)
    }
}

async function deleteComment(req, res){
    let group = await Group.findById(req.params.groupid)
    try{
        if(!group) return res.redirect(`/groups/${group._id}`)
        let post = group.posts.id(req.params.postid)
        post.comments.remove(req.params.commentsid)
        group.save(function(err){
            res.redirect(`/groups/${group._id}`)
        })
    } catch(err){
        console.log(err.message)
    }
}