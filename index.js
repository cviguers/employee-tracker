// include packages and files needed for this application
const fs = require("fs");
const inquirer = require("inquirer");


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
        const directoryChoice = data;
        switch(directory) {
            case 'view all departments':
                directoryChoice = viewAllDepartments();
            break;
            case 'view all roles':
                directoryChoice = viewAllRoles();
            break;
            case 'view all employees':
                directoryChoice = viewAllEmployees();
            break;
            case 'add a department':
                directoryChoice = viewAllDepartments();
            break;
            case 'add a role':
                directoryChoice = viewAllDepartments();
            break;
            case 'add an employee':
                directoryChoice = viewAllDepartments();
            break;
            case 'update an employee role':
                directoryChoice = viewAllDepartments();
            break;
        }
    })
