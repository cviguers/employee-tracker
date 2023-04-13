// connect to database
const sequelize = require('./config/connection');

// function to view all departments
async function viewDepartments() {
    // call connection to database
    const db = await mysql.createConnection(sequelize);
    // sql query to select everything from departments table
    const [rows] = await db.query('SELECT * FROM departments');
    // use console table dependency to display rows in console
    console.table(rows);
};

// function to view all roles
async function viewRoles() {
    const db = await mysql.createConnection(sequelize);
    const [rows] = await db.query('SELECT * FROM roles');
    console.table(rows);
};

// function to view all employees
async function viewEmployees() {
    const db = await mysql.createConnection(sequelize);
    const [rows] = await db.query('SELECT * FROM employees');
    console.table(rows);
};

// function to add a new department
async function addDepartment() {
    // add additional prompt for user to input dept info
    const { departmentName } = await inquirer.prompt([
        {
        type: 'input',
        name: 'departmentName',
        message: 'Enter new department name:',
        },
    ]);
    // query to add new department to departments table
    db.query("INSERT INTO departments SET ?", departments);
    await db.query('INSERT INTO departments (department_name) VALUES (?)', [departmentName]);
};
-
// function to add a new role
async function addRole() {
    // add additional prompt for user to input role info
    const { title, salary, departmentID } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter new role title:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter new role salary:',
    },
    {
      type: 'input',
      name: 'departmentID',
      message: 'Enter new department ID for role:',
    },
    ]);
    // query to add new role info into roles table
    db.query("INSERT INTO roles SET ?", roles);
    await db.query('INSERT INTO roles (title, department_id, salary) VALUES (?, ?, ?)', [title, salary, departmentID]);
    console.log('New role added.');
};

async function addEmployee() {
    // add additional prompt for user to input employee info
    const { firstName, lastName, roleID, managerID } = await inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: "Enter new employee's first name: ",
        },
        {
          type: 'input',
          name: 'lastName',
          message: "Enter new employee's last name: ",
        },
        {
          type: 'input',
          name: 'roleID',
          message: "Enter new employee's role ID: ",
        },
        {
          type: 'input',
          name: 'managerID',
          message: "Enter new employee's manager ID (leave blank if none): ",
        },
      ]);
    // query to add new employee info into employees table
    db.query("INSERT INTO employees SET ?", employees);
    await connection.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [
        firstName,
        lastName,
        roleID,
        managerID || null,
    ]);
    console.log('Added new employee');
};

async function updateEmployeeRole() {
    // add additional prompt for user to add details about role update
    const { employeeID, roleID } = await inquirer.prompt([
        {
        type: 'input',
        name: 'employeeId',
        message: 'Enter the employee ID you want to update:',
        },
        {
        type: 'input',
        name: 'newRoleId',
        message: 'Enter the new role ID for the employee:',
        },
    ]);
    // query to add eupdate employee info into employees table
    db.query( "UPDATE employees SET roles_id = ? WHERE id = ?", [employeeID, roleID]);
    console.log('Updated employee role.');
};

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole }