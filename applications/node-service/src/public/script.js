const form = document.getElementById("employeeForm");
let editId = null;
async function loadEmployees() {

    const response = await fetch("/employees");
    const employees = await response.json();

    const table = document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(employee => {

        table.innerHTML += `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>

<td>
    <button onclick="editEmployee(${employee.id})">Edit</button>

    <button onclick="deleteEmployee(${employee.id})">Delete</button>
</td>
        </tr>
        `;

    });

}

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const employee = {

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value

    };

    if(editId === null){

        await fetch("/employees",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(employee)

        });

    }else{

        await fetch(`/employees/${editId}`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(employee)

        });

        editId = null;

        document.querySelector("button[type='submit']").innerText = "Add Employee";

    }

    form.reset();

    loadEmployees();

});

async function editEmployee(id){

    const response=await fetch("/employees");

    const employees=await response.json();

    const employee=employees.find(emp=>emp.id===id);

    document.getElementById("name").value=employee.name;
    document.getElementById("email").value=employee.email;
    document.getElementById("department").value=employee.department;
    document.getElementById("salary").value=employee.salary;

    editId=id;

    document.querySelector("button[type='submit']").innerText="Update Employee";

}

async function deleteEmployee(id) {

    if (!confirm("Are you sure you want to delete this employee?")) {
        return;
    }

    const response = await fetch(`/employees/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        loadEmployees();
    } else {
        alert("Delete failed!");
    }
}

loadEmployees();
