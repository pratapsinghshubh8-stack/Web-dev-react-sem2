let employees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;
    if (name === "" || empId === "" || isNaN(salary) || dept === "") {
        alert("Please fill all fields correctly.");
        return;
    }
    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: dept
    };
    employees.push(employee);
    alert("Employee added successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    let output = "<h3>All Employee List</h3>";
    employees.forEach(emp => {
        output += `
            <p>Name: ${emp.name} |
            ID: ${emp.id} |
            Salary: ${emp.salary} |
            Department: ${emp.department} <br>
        `;
    });
    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let output = "<h3>Employees with Salary > 50000</h3>";
    filtered.forEach(emp => {
        output += `
            Name: ${emp.name} |
            Salary: ${emp.salary} <br>
        `;
    });
    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = "<h3>Total Salary of All Employees: " + total + "</h3>";
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees to calculate average salary.</h3>";
        return;
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let average = total / employees.length;
    document.getElementById("output").innerHTML = "<h3>Average Salary of All Employees: " + average + "</h3>";
}

function countDepartment(){
    let deptName = prompt("Enter department name:");
    let count = employees.filter(emp => emp.department === deptName).length;
    document.getElementById("output").innerHTML = "<h3>Employee Count in " + deptName + ": " + count + "</h3>";
}