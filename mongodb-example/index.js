const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

const Board = require('./board');
const router = require('./router')(app, Board)

const DB_ADDRESS = "mongodb+srv://<userID>:<password>@cluster0.6y3np.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

let mongooseOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};
mongoose.connect(DB_ADDRESS, mongooseOption
).then(() => {
    console.log("MongoDB Connect!!")
}).catch((err) => {
    console.log(err)
});

app.get('/', function (req, res) {
    res.send('hello world');
});
app.listen(port, () => console.log(`Express app listening on port ${port}!`));
