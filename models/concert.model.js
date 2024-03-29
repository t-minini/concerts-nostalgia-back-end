import { Schema, model } from 'mongoose';

const concertSchema = Schema({
  concert: {
    type: String,
    required: [true, 'Please, enter Concert!'],
  },
  artist: {
    type: String,
    required: [true, 'Please, enter Artist!'],
  },
  date: {
    type: Date,
    required: [true, 'Please, enter Date!'],
  },
  location: {
    type: String,
    required: [true, 'Please, enter Location!'],
  },
  city: {
    type: String,
    required: [true, 'Please, enter City!'],
  },
  country: {
    type: String,
    required: [true, 'Please, enter Country!'],
  },
  companion: {
    type: String,
    required: [true, 'Please, enter who you came to the concert with!'],
    default: 'Alone',
  },
  rating: {
    type: Number,
    required: [true, 'Please, enter Rating!'],
    enum: [1, 2, 3, 4, 5],
  },
  images: {
    type: String,
    required: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const ConcertModel = model('Concert', concertSchema);

export default ConcertModel;

// THIS CODE: DEFINES A MONGOOSE SCHEMA FOR STORING THE CONCERT DATA IN THE MONGODB DATABASE, CREATES A MODEL BASED ON THE SCHEMA, AND EXPORTS THE MODEL.
