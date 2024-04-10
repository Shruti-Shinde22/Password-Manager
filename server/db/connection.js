const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose.connect("mongodb+srv://Shruti:shruti1@cluster0.bkxdm5w.mongodb.net/passmanager?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() =>
{
    console.log("Connection success.");
})
.catch((error) =>
{
    console.log(error)
})
}
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const { MongoClient } = require('mongodb');
// const { ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://Shruti:shruti1@cluster0.bkxdm5w.mongodb.net/passmanager?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
// });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB successfully!");
//     return client.db("passmanager");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// }

// module.exports = { connectToDatabase };


// const { MongoClient } = require('mongodb');

// const uri = "mongodb+srv://Shruti:shruti1@cluster0.bkxdm5w.mongodb.net/passmanager?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
 
// });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB successfully!");
//     return client.db("passmanager");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// }

 module.exports= { connectToDatabase };
