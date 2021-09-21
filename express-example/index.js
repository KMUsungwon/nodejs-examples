const express = require('express');
const app = express(); // 해당 객체를 Application 이라고 부름

let users = [
    {id:1, name: 'alice'},
    {id:2, name: 'bob'},
    {id:3, name: 'chris'},
]

app.get('/users', (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if(Number.isNaN(limit)) {
        return res.status(400).end();
    }
    res.json(users.slice(0, limit));
});

app.listen(3000, () => {
    console.log("Server is running!");
});

module.exports = app;
