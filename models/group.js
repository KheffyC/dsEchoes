const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    title: String,
    posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}],
    user: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
    // userName: String,
    // userAvatar: String    
}, {
    timestamps: true
})

module.exports = mongoose.model('Group', groupSchema)