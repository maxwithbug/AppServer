const mongoose = require('mongoose');
const validator = require('validator');

const personalDetails = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters"],
        maxlength: [10, "First name must be less than 10 characters"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 characters"],
        maxlength: [10, "Last name must be less than 10 characters"],
        trim: true,
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Date of birth is required"],
        min: [1900, "Date of birth must be after 1900"],
        max: [new Date(), "Date of birth must be before today"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },

});

const PersonalDetails = mongoose.model('PersonalDetails', personalDetails);

module.exports = PersonalDetails;

