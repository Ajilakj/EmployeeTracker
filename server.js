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
                    console.table(results);
                  });
          }

          else if(input.sqlOperation==="Add Employee"){
               inquirer.prompt([
                    {
                         type: 'input',
                         name: 'empFirst',
                         message: 'Enter Employee First name'
                    },
                    {
                         type: 'input',
                         name: 'empLast',
                         message: 'Enter Employee Last name'
                    },
                    {
                         type: 'input',
                         name: 'roleId',
                         message: 'Enter new Employee role id'
                    },
                    {
                         type: 'input',
                         name: 'mgrId',
                         message: 'Enter new Employee Manager Id'
                    }
                  ])
               .then((input)=>{
               db.query('INSERT INTO  employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [input.empFirst,input.empLast,input.roleId,input.mgrId] , 
               function (err) {console.log(err); });
               }
          )}
          // select all values from role table
          else if(input.sqlOperation==="View all role"){
               db.query('SELECT * FROM emprole', function (err, results) {
                    console.table(results);
                  });
          }
          else if(input.sqlOperation==="Add role"){
               inquirer.prompt([
                    {
                         type: 'input',
                         name: 'title',
                         message: 'Enter Job Title'
                    },
                    {
                         type: 'input',
                         name: 'salary',
                         message: 'Enter Salary'
                    },
                    {
                         type: 'input',
                         name: 'dept',
                         message: 'Enter Department id'
                    }
                  ])
               .then((input)=>{
               db.query('INSERT INTO emprole (title, salary, department_id) VALUES (?,?,?)', [input.title,input.salary,input.dept] , 
               function (err) {console.log(err); });
               }
          )}
          // select all values from department table 
          else if(input.sqlOperation==="View all departments"){
               db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                  });
          }
          else if(input.sqlOperation==="Add department"){
               inquirer.prompt([
                    {
                         type: 'input',
                         name: 'addDept',
                         message: 'Enter new Department name'
                    }
                  ])
               .then((input)=>{
               db.query('INSERT INTO department(deptname) VALUES (?)', input.addDept, function (err, results) {
                    console.log(err);
                  });
               }
          )}
     }
   );


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

