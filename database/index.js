const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'GalvinX22',
  database: 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

const getAll = (callback) => {
  const queryString = 'SELECT * FROM names';

  connection.query(queryString, (err, data) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

const create = (param1, param2, callback) => {
  console.log('1', param1)
  console.log('2', param2)
  const params = [param1, param2]
  const queryString = 'INSERT INTO names (name1, description1) VALUES (?, ?)';

  connection.query(queryString, params, (err, data) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}




// Don't forget to export your functions!
module.exports = {
  connection,
  create,
  getAll
};
