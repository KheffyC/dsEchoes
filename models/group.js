const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    title: {type: String, required: true},
    posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
    users: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
    // userName: String,
    // userAvatar: String    
}, {
    timestamps: true
})

module.exports = mongoose.model('Group', groupSchema)