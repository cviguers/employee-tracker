const mysql = require("mysql2/promise");
const sequelize = require("../config/connection");
const inquirer = require("inquirer");
require("dotenv").config();

const config = {
  host: "localhost",
  user: "root",
  password: "ScaryWords900!",
  database: "employee_db",
};

// function to view all departments
async function viewDepartments() {
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from departments table
  const [rows] = await connection.execute("SELECT * FROM department");
  // use console table dependency to display rows in console
  console.table(rows);
}

// function to view all roles
async function viewRoles() {
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from roles table
  const [rows] = await connection.execute("SELECT * FROM role");
  console.table(rows);
}

// function to view all employees
async function viewEmployees() {
  // call connection to database
  const connection = await mysql.createConnection(config);
  // query db to select everything from employees table
  const [rows] = await connection.execute("SELECT * FROM employee");
  console.table(rows);
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
  await connection.execute('INSERT INTO role (title, department_id, salary) VALUES (?, ?, ?)', [title, salary, departmentID]);
  // query db to select everything from departments table
  const [rows] = await connection.execute("SELECT * FROM role");
  console.table(rows);
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
  const [rows] = await connection.execute('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [
    firstName,
    lastName,
    roleID,
    managerID || null,
  ]);
  console.table(rows);
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
 const [rows] = await connection.execute('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleID, employeeID]);
 console.table(rows);
}

module.exports = {
  viewDepartments,
  viewRoles,
  viewEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
