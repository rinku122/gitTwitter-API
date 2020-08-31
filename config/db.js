const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log(` MongoDB connected : ${conn.connection.host} `.black.bgWhite);
};

module.exports = connectDB;
