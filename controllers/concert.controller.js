import ConcertModel from './../models/concert.model.js';

// GET ALL CONCERTS
export const getConcerts = async (req, res) => {
  try {
    const concerts = await ConcertModel.find({});
    res.status(200).json(concerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE CONCERT
export const getConcert = async (req, res) => {
  try {
    const { id } = req.params;
    const concert = await ConcertModel.findById(id);
    if (!concert) {
      return res.status(404).json({ message: 'Concert not found!' });
    } else {
      res.status(200).json(concert);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD A CONCERT
export const addConcert = async (req, res) => {
  try {
    const newConcert = await ConcertModel.create(req.body);
    res.status(200).json(newConcert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// EDIT A CONCERT
export const editConcert = async (req, res) => {
  try {
    const { id } = req.params;
    const concert = await ConcertModel.findByIdAndUpdate(id, req.body);
    if (!concert) {
      return res.status(404).json({ message: 'Concert not found!' });
    }
    const updatedConcert = await ConcertModel.findById(id);
    res.status(200).json(updatedConcert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE A CONCERT
export const deleteConcert = async (req, res) => {
  try {
    const { id } = req.params;
    const concert = await ConcertModel.findByIdAndDelete(id);
    if (!concert) {
      res.status(404).json({ message: 'Concert not found!' });
    }
    res.status(200).json({ message: 'Concert deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// THIS CODE: DEFINES CONTROLLER FUNCTIONS FOR HANDLING CRUD OPERATIONS ON CONCERT DATA STORED IN A MONGODB DATABASE USING MONGOOSE.
