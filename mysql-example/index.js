const mysql = require("mysql");
const express = require("express");
const app = express();

const conn = {
    host: 'localhost',
    port: '3306',
    user: 'username',
    password: 'userPw',
    database: 'kleague', // your database to use
}

app.get('/', (req, res) => {

    // create DB connection
    let connection = mysql.createConnection(conn);
    connection.connect(); // connect database

    const testQuery = "SELECT * FROM PLAYER";

    connection.query(testQuery, (error, result, field) => {
        if (error) {
            console.log("Error Execution :", error);
        }
        res.send(result);
    });
    connection.end(); // de-connect database


})

app.listen(3000, () => {
    console.log("Running Mysql Example..");
})
