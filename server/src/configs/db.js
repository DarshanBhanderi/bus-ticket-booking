require("dotenv").config();
const mongoose = require("mongoose");

let connect = () => {
  return mongoose
    .connect(process.env.MONGO_PATH, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(" MongoDB Connected Successfully! "))
    .catch((err) => console.error("MongoDB Connection Error:", err));
};

module.exports = connect;