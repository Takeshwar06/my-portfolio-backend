const PORT=5000;
const MONGO_URL="mongodb+srv://takeshwar:62.66.00@cluster0.yv8kebj.mongodb.net/?retryWrites=true&w=majority";
const express = require("express");
const cors=require("cors")
const mongoose=require("mongoose")
const passwordRoute=require("./routes/passwordRoutes");
const messageRoute=require("./routes/messageRoutes");
const viewerRoute=require("./routes/viewerRoutes");
const app=express();

app.use(cors());
app.use(express.json()); // **
app.use(express.urlencoded({extended:true}));

app.use("/api/password",passwordRoute);
app.use("/api/message",messageRoute);
app.use("/api/viewer",viewerRoute);


// Connect to MongoDB (replace with your MongoDB connection URI)
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const server=app.listen(PORT,()=>{
    console.log("server runing in port ",PORT);
})