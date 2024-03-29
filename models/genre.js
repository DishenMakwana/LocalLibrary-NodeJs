var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

// Virtual for genre-instance's URL
GenreSchema.virtual('url').get(function () {
  return '/catalog/genre/' + this._id;
});

// Export module
module.exports = mongoose.model('Genre', GenreSchema);
