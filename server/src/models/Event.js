const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
  },
  allDay: {
    type: Boolean,
    required: true,
  },
});

const event = mongoose.model('Event', eventSchema);
module.exports = event;
