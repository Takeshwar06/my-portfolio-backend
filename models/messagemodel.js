const mongoose = require("mongoose")


const messageSchema = new mongoose.Schema({
       name: {
              type: String,
              required: true
       },
       email: {
              type: String,
              required: true,
       },
       subject: {
              type: String,
              default: ""
       },
       message: {
              type: String,
              default: ""
       },
       date: {
              type: Date,
              default: Date.now(),
       },

},
       {
              timestamps: true
       }
)

module.exports = mongoose.model("Message", messageSchema);