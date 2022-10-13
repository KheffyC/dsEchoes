const Group = require('../models/group')


module.exports = {
    create,
    edit,
    update,
    delete: deletePost,
} 

async function create(req, res){
    let group = await Group.findById(req.params.groupid).populate('user');
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar; 
    group.posts.push(req.body)
    group.save(function(err) {
        res.redirect(`/groups/${group.id}`)
    })
}

async function edit(req, res){
    let group = await Group.findOne({'posts._id': req.params.postid})
    try{
        if (group) {
            const post = group.posts.id(req.params.postid)
            res.render(`groups/edit`, {post, group})
        } 
    }catch(err){
        console.log(err.message)
    }
}

async function update(req, res){
    let group = await Group.findOne({'posts._id': req.params.postid})
    try{
        if (group){
            const post = group.posts.id(req.params.postid)
            // Ensure that the comment was created by the logged in user
            if (!post.user.equals(req.user._id)) return res.redirect(`/groups/${group._id}`)
            // update text content
            post.content = req.body.content;
            // save the parent schema
            group.save(function(err){
                res.redirect(`/groups/${group._id}`)
            })
        }
    } catch(err){
        console.log(err.message)
    }
}

async function deletePost(req, res){
    let group = await Group.findOne({'posts._id': req.params.postid})
    try{
        if(!group) return res.redirect(`/groups/${group._id}`)
        group.posts.remove(req.params.postid)
        group.save(function(err){
            res.redirect(`/groups/${group._id}`)
        })

    } catch(err){
        console.log(err.message)
    }
}