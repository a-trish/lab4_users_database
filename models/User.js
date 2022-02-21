const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
      },
    username: {
        type: String,
        required: [true,"Please enter username"],
        trim: true,
        lowercase: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already in use"],
        trim: true,
        validate: function(value){
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value)
        }
    },
    address:{
        street: {
            type: String,
            required: [true, "Please enter city"]
        },
        suite:{
            type: String,
            required: [true, "Please enter suite"],
            trim: true
        },
        city: {
            type: String, 
            rquired: true,
            trim: true,
            lowercase: true,
            validate: function (value) {
                var cityRegex = /^[a-zA-Z ]*$/;
                return cityRegex.test(value);
            }
        },
        zipcode: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate: function (value) {
              var zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
              return zipcodeRegex.test(value);
            },
        },
        geo: {
            lat: {
              type: Number,
              required: true,
            },
            lng: {
              type: Number,
              required: true,
            },
        },

    },
    phone: {
        type: String,
        required: true,
        validate: function (value) {
          var phoneRegex = /^\d[-]\d{3}[-]\d{3}[-]\d{4}$/;
          return phoneRegex.test(value);
        },
    },
    website: {
        type: String,
        required: true,
        validate: function(value) {
            var urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/;
            return urlRegex.test(value);
        }
    },
    company: {
        name: {
          type: String,
          required: true,
          trim: true,
        },
        catchPhrase: { type: String, required: true, trim: true },
        bs: { type: String, required: true, trim: true },
      },
});

const User = mongoose.model("users", UserSchema);
module.exports = User;