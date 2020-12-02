var faker = require('faker');
const { connect } = require('http2');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
      user: "root",
      password: "root",
      database: "join_us",
      insecureAuth : true
});

var data = []
for (var i = 0; i<500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

var q = 'INSERT INTO users(email, created_at) VALUES ?';

connection.query(q, [data], function(err, results){
    if (err) throw err;
    console.log(results);
});

q = 'SELECT * FROM users LIMIT 5';
connection.query(q, function(err, results, fields){
    if (err) throw err;
    console.log(results);
});

connection.end();
