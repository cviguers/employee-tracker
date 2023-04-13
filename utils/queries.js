// connect to database
const db = require('./config/connection.js');



function viewDepartments() {
    // sql query to view everything from departments table
    db.query(`SELECT * FROM departments`);
};

function viewRoles() {
    // sql query to view everything from roles table
    db.query(
    `SELECT roles.id, roles.title, roles.salary departments.departments_name AS departments
    
    FROM roles
    
    LEFT JOIN departments ON roles.department_id = departments.id`);
};

function viewEmployees() {
    // sql query to view everything from employees table
    db.query(
    `SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department_name AS departments, roles.salary,
    
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    
    FROM employees,
    
    LEFT JOIN roles ON employees.roles_id = roles.id
    
    LEFT JOIN departments ON roles.department_id = departments.departments_id

    LEFT JOIN employees manager ON employees.manager_id = manager.id;`);
};

function addDepartments(department) {
    db.query("INSERT INTO department SET ?", department);
};

function addRole(role) {
    db.query("INSERT INTO role SET ?", role);
};

function addEmployee(employee) {
    db.query("INSERT INTO employee SET ?", employee);
};

function updateEmployeeRole(roleID, employeeID) =>
    db.query(
      "UPDATE employees SET roles_id = ? WHERE id = ?",
      [roleID, employeeID]
    );

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartments, addRole, addEmployee, updateEmployeeRole }