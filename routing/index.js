const express = require('express');
const app = express();
const port = 8000; // port 번호는 임의로 지정 가능

app.set('port', port) // set port number

app.get('/', function (req, res) {
    res.send('Hello, world');
});
app.get('/board', function (req, res) {
    res.send('Board 입니다.');
});
app.get('/login', function (req, res) {
    res.send('Login 입니다.');
});
app.get('/signup', function (req, res) {
    res.send('Signup 입니다.');
});

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
