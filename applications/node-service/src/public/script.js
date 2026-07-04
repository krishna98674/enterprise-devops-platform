// Get the form
const form = document.getElementById("employeeForm");

// Store the employee id while editing
let editId = null;


// =========================
// Load all employees
// =========================

async function loadEmployees() {

    // Get data from backend
    const response = await fetch("/employees");

    // Convert response to JSON
    const employees = await response.json();

    // Get table body
    const table = document.getElementById("employeeTable");

    // Clear old rows
    table.innerHTML = "";

    // Loop through all employees
    for (let i = 0; i < employees.length; i++) {

        let employee = employees[i];

        table.innerHTML +=
        "<tr>" +
            "<td>" + employee.id + "</td>" +
            "<td>" + employee.name + "</td>" +
            "<td>" + employee.email + "</td>" +
            "<td>" + employee.department + "</td>" +
            "<td>" + employee.salary + "</td>" +

            "<td>" +
                "<button onclick='editEmployee(" + employee.id + ")'>Edit</button> " +
                "<button onclick='deleteEmployee(" + employee.id + ")'>Delete</button>" +
            "</td>" +
        "</tr>";

    }

}


// =========================
// Save Employee
// =========================

form.addEventListener("submit", saveEmployee);

async function saveEmployee(event) {

    // Stop page refresh
    event.preventDefault();

    // Read values from form
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    // Create object
    let employee = {

        name: name,
        email: email,
        department: department,
        salary: salary

    };


    // ADD
    if (editId == null) {

        await fetch("/employees", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(employee)

        });

    }

    // UPDATE
    else {

        await fetch("/employees/" + editId, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(employee)

        });

        editId = null;

        document.querySelector("button[type='submit']").innerText = "Add Employee";

    }

    // Clear form
    form.reset();

    // Reload table
    loadEmployees();

}


// =========================
// Edit Employee
// =========================

async function editEmployee(id) {

    const response = await fetch("/employees");

    const employees = await response.json();

    // Find employee
    for (let i = 0; i < employees.length; i++) {

        if (employees[i].id == id) {

            document.getElementById("name").value = employees[i].name;
            document.getElementById("email").value = employees[i].email;
            document.getElementById("department").value = employees[i].department;
            document.getElementById("salary").value = employees[i].salary;

            break;

        }

    }

    editId = id;

    document.querySelector("button[type='submit']").innerText = "Update Employee";

}


// =========================
// Delete Employee
// =========================

async function deleteEmployee(id) {

    let answer = confirm("Are you sure?");

    if (answer == false) {

        return;

    }

    await fetch("/employees/" + id, {

        method: "DELETE"

    });

    loadEmployees();

}


// Start program
loadEmployees();