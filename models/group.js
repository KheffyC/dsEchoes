const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: { type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
})

const postSchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String,
    comments: [commentSchema]
}, {
    timestamps: true
})

const groupSchema = new Schema({
    title: {type: String, required: true},
    posts: [postSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    users: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
}, {
    timestamps: true
})

module.exports = mongoose.model('Group', groupSchema)