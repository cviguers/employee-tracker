// include packages and files needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {viewDepartments, viewRoles, viewEmployees, addDepartments, addRole, addEmployee, updateEmployeeRole} = require('./utils/directory');


const init = function() {
    // array of questions for user input
    inquirer
        .prompt([
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
                'update an employee role'
            ],
        }
        ])
        .then((data) => {
            // dependent on directory choice, call corresponding function
            let directoryChoice = data.directory;
            switch(directory) {
                case 'view all departments':
                    directoryChoice = viewDepartments();
                break;
                case 'view all roles':
                    directoryChoice = viewRoles();
                break;
                case 'view all employees':
                    directoryChoice = viewEmployees();
                break;
                case 'add a department':
                    directoryChoice = addDepartments();
                break;
                case 'add a role':
                    directoryChoice = addRole();
                break;
                case 'add an employee':
                    directoryChoice = addEmployee();
                break;
                case 'update an employee role':
                    directoryChoice = updateEmployeeRole();
                break;
            }
        })
        // log errors, if any
        .catch(err => {
            console.log(err);
        })
}

// call for app to begin
init();