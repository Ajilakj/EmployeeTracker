const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// connect to db EMPLOYEE_TRACKER
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'mySqlPassword',
    database: 'EMPLOYEE_TRACKER'
  },
  console.log(`Connected to the EMPLOYEE_TRACKER database.`)
);
// select all values from employee table
db.query('SELECT * FROM employee', function (err, results) {
  console.log(results);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
