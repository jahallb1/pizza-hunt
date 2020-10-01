const { Schema, model } = require('mongoose');
const moment = require('moment');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createAtVal) => moment(createAtVal).format('MMM DD, YYY [at] hh:mm a')
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// get total count of comments and replies on retrievals
PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

// create the Pizza model usign the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// export the Pizza model
module.exports = Pizza;