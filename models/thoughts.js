const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');
const moment = require('moment');


const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true,
    
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reactions: [reactionSchema]
    },   
    {   
    toJson: { 
        virtuals: true, 
        getters: true
    },
    id: false
}
);


thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;