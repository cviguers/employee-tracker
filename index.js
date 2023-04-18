// include packages and files needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv').config();
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole,
} = require('./lib/db.js')

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

async function startQuestions () {
    // prompting user question object
    inquirer
        .prompt(directory)
        .then((data) => {
            // dependent on directory choice, call corresponding function
            let directoryChoice = data.directory;
            switch(directoryChoice) {
                case 'view all departments':
                    console.log('viewing departments')
                    viewDepartments();
                break;
                case 'view all roles':
                    viewRoles();
                break;
                case 'view all employees':
                    viewEmployees();
                break;
                case 'add a department':
                    addDepartment();
                break;
                case 'add a role':
                    addRole();
                break;
                case 'add an employee':
                    addEmployee();
                break;
                case 'update an employee role':
                    updateEmployeeRole();
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


// call for app to begin
init();
async function init(){
await startQuestions();
}