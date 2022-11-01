const inquirer=require('inquirer');
inquirer.prompt([
     {
          type: 'list',
          name: 'sqlOperation',
          message: 'What would you like to do?',
          choices: ['View All employees','Add Employee','Update employee role', 'View all role', 'Add role','View all departments', 'Add department', 'QUIT']
     }
     // {
     //      type: 'input',
     //      message: "View All employees",
     //      name: 'viewEmp',
     // },
     // {
     //      type:'input',
     //      message:'Add Employee',
     //      name:'addEmp',
     // },
     // {
     //      type:'input',
     //      message:'Update employee role',
     //      name:'updateRole'
     // },
     // {
     //      type:'input',
     //      message:'View all role',
     //      name:'viewRole'
     // },
     // {
     //      type:'input',
     //      message:'Add role',
     //      name:'addRole'
     // },
     // {
     //      type:'input',
     //      message:'View all departments',
     //      name:'viewDept'
     // },
     // {
     //      type:'input',
     //      message:'Add department',
     //      name:'addDept'
     // },
     
   ])

   .then((input)=>{
          // employeeArray.push(new Mgr(input.empId, input.empName, input.email, input.officeno));
          // selectEmpType();
          console.log("testing" + input);
     }
   );