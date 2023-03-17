const express = require("express")
const mongoose =  require("mongoose")
const bodyParser = require('body-parser');
const Todo = require("./model/Todo")
const app = express()


// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors')
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.post('/create-todo',async(req,res) =>{
    
    const todo = new Todo(req.body);
    todo.save((err, content) => {
        if (err || !content) {
          return res.status(400).json({
            error: "something went wrong",
          });
        }
        // todo is created
        // send the created todo as json response
        res.json({ content });
      });


})

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}
const uri = `mongodb+srv://zubair:Thebalochcoder55@todoapp.otaqn.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri,connectionParams).then(() =>{
console.log("Database is Connected")
}).catch(error => console.log(error))
const port = 5000
app.listen(port,(req,res) =>{
    console.log(`Server is running ${port}`)
})