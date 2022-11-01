const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// connect to db EMPLOYEE_TRACKER
const db = mysql.createConnection(
     {
       host: 'localhost',
       user: 'root',
       password: 'mySqlPassword',
       database: 'EMPLOYEE_TRACKER'
     },
     // console.log(`Connected to the EMPLOYEE_TRACKER database.`)
   );

const inquirer=require('inquirer');
inquirer.prompt([
     {
          type: 'list',
          name: 'sqlOperation',
          message: 'What would you like to do?',
          choices: ['View All employees','Add Employee','Update employee role', 'View all role', 'Add role','View all departments', 'Add department', 'QUIT']
     }
       
   ])

   .then((input)=>{
          // select all values from employee table
          if(input.sqlOperation==="View All employees"){
               db.query('SELECT * FROM employee', function (err, results) {
                    console.log(results);
                  });
          }
          // select all values from role table
          else if(input.sqlOperation==="View all role"){
               db.query('SELECT * FROM emprole', function (err, results) {
                    console.log(results);
                  });
          }
          // select all values from department table
          else if(input.sqlOperation==="View all departments"){
               db.query('SELECT * FROM department', function (err, results) {
                    console.log(results);
                  });
          }
     }
   );


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

