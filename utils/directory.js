function viewDepartments() {
    // THEN I am presented with a formatted table showing department names and department ids
};

function viewRoles() {
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
};

function viewEmployees() {
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
};

function addDepartments() {
    // THEN I am prompted to enter the name of the department and that department is added to the database
};

function addRole() {
    // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
};

function addEmployee() {
    // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
};

function updateEmployeeRole() {
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
};

module.exports = { viewDepartments, viewRoles, viewEmployees, addDepartments, addRole, addEmployee, updateEmployeeRole }