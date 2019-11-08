const mongose = require("mongoose");

const connectDB = async () => {
  const conn = await mongose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  });
  console.log(`MongoDB connected:${conn.connection.host}`.cyan.bold);
};
module.exports = connectDB;
