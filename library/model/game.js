var gameSchema = new Schema({
    _id: Schema.Types.ObjectId,
    date: Date,
    location: {type: String, default: ''},
    home: {type: Boolean, default: false},
    opponent: {type: Schema.Types.ObjectId, ref: 'TeamName'}
});

exports.GameModel = function() {
    return mongoose.model('Game', gameSchema);
}