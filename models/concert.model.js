import { Schema, model } from 'mongoose';

const concertSchema = Schema(
  {
    concert: {
      type: String,
      required: [true, 'Please, enter concert!'],
    },
    artist: {
      type: String,
      required: [true, 'Please, enter artist!'],
    },
    date: {
      type: Date,
      required: [true, 'Please, enter concert date!'],
    },
    location: {
      type: String,
      required: [true, 'Please, enter location!'],
    },
    city: {
      type: String,
      required: [true, 'Please, enter city!'],
    },
    country: {
      type: String,
      required: [true, 'Please, enter country!'],
    },
    companion: {
      type: String,
      required: false,
      default: 'Alone',
    },
    rating: {
      type: Number,
      required: [true, 'Please, enter rating!'],
      enum: [1, 2, 3, 4, 5],
    },
    images: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ConcertModel = model('Concert', concertSchema);

export default ConcertModel;

// THIS CODE: DEFINES A MONGOOSE SCHEMA FOR STORING THE CONCERT DATA IN THE MONGODB DATABASE, CREATES A MODEL BASED ON THE SCHEMA, AND EXPORTS THE MODEL.
