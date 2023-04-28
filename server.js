// include packages and files needed for this application
const inquirer = require('inquirer');
const mysql = require("mysql2/promise");
require("dotenv").config();

const config = {
  host: "localhost",
  user: "root",
  password: "ScaryWords900!",
  database: "employee_db",
};

const directory = [
    {
        type: 'list',
        name: 'directory',
        message: 'What would you like to do?',
        choices: [
            'view all departments',
            'view all roles',
            'view all employees',
            'add a department',
            'add a role',
            'add an employee',
            'update an employee role',
            'exit'
        ],
    }
];

async function startQuestions() {
    // prompting user question object
    inquirer
        .prompt(directory)
        .then((data) => {
            // dependent on directory choice, call corresponding function
            let directoryChoice = data.directory;
            switch(directoryChoice) {
                case 'view all departments':
                    viewDepartments();
                    console.log('viewing departments')
                break;
                case 'view all roles':
                    viewRoles();
                    console.log('viewing roles')
                break;
                case 'view all employees':
                    viewEmployees();
                    console.log('viewing employees')
                break;
                case 'add a department':
                    addDepartment();
                    console.log('adding department')
                break;
                case 'add a role':
                    addRole();
                    console.log('adding role')
                break;
                case 'add an employee':
                    addEmployee();
                    console.log('adding employee')
                break;
                case 'update an employee role':
                    updateEmployeeRole();
                    console.log('updating employee role')
                break;
                case 'exit':
                    process.exit();
            }
        })
        // log errors, if any
        .catch(err => {
            console.log(err);
        })
}

// function to view all departments
async function viewDepartments() {
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from departments table
  const [rows] = await connection.execute("SELECT * FROM department");
  // use console table dependency to display rows in console
  console.table(rows);
  // main menu options
  startQuestions()
}

// function to view all roles
async function viewRoles() {
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from roles table
  const [rows] = await connection.execute("SELECT * FROM role");
  console.table(rows);
  startQuestions()
}

// function to view all employees
async function viewEmployees() {
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from employees table
  const [rows] = await connection.execute("SELECT * FROM employee");
  console.table(rows);
  startQuestions()
}

// function to add a new department
async function addDepartment() {
  // add additional prompt for user to input dept info
  const { departmentName } = await inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "Enter new department name:",
    },
  ]);
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from employees table
  await connection.execute('INSERT INTO department (name) VALUES (?)', [departmentName]);
  // query db to select everything from departments table
  const [rows] = await connection.execute("SELECT * FROM department");
  console.table(rows);
  startQuestions()
}

// function to add a new role
async function addRole() {
  // add additional prompt for user to input role info
  const { title, salary, departmentID } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter new role title:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter new role salary:",
    },
    {
      type: "input",
      name: "departmentID",
      message: "Enter new department ID for role:",
    },
  ]);
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from employees table
  await connection.execute('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentID]);
  // query db to select everything from departments table
  const [rows] = await connection.execute("SELECT * FROM role");
  console.table(rows);
  startQuestions()
}

async function addEmployee() {
  // add additional prompt for user to input employee info
  const { firstName, lastName, roleID, managerID } = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter new employee's first name: ",
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter new employee's last name: ",
    },
    {
      type: "input",
      name: "roleID",
      message: "Enter new employee's role ID: ",
    },
    {
      type: "input",
      name: "managerID",
      message: "Enter new employee's manager ID (leave blank if none): ",
    },
  ]);
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from employees table
  await connection.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [
    firstName,
    lastName,
    roleID,
    managerID || null,
  ]);
  // query db to select everything from departments table
  const [rows] = await connection.execute("SELECT * FROM employee");
  console.table(rows);
  startQuestions()
}

async function updateEmployeeRole() {
  // add additional prompt for user to add details about role update
  const { employeeID, newRoleID } = await inquirer.prompt([
    {
      type: "input",
      name: "employeeID",
      message: "Enter the employee ID you want to update:",
    },
    {
      type: "input",
      name: "newRoleID",
      message: "Enter the new role ID for the employee:",
    },
  ]);
 // call connection to database
 const connection = await mysql.createConnection(config);
 // query db to select everything from employees table
 await connection.execute('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleID, employeeID]);
 const [rows] = await connection.execute("SELECT * FROM employee");
 console.table(rows);
 startQuestions()
}


// call for app to begin
init();
async function init(){
await startQuestions();
}

