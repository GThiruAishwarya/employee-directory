// static/js/app.js
let employees = [...mockEmployees];

// Render employee list on dashboard
function deleteEmployee(id) {
  employees = employees.filter(e => e.id !== id);
  renderEmployeeList(employees);
  localStorage.setItem('employees', JSON.stringify(employees));
}

function loadEmployeesFromStorage() {
  const stored = localStorage.getItem('employees');
  if (stored) {
    employees = JSON.parse(stored);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadEmployeesFromStorage();

  const listContainer = document.getElementById('employee-list');
  if (listContainer) {
    renderEmployeeList(employees);
    listContainer.addEventListener('click', e => {
      if (e.target.classList.contains('delete-btn')) {
        const id = parseInt(e.target.dataset.id);
        if (confirm('Are you sure you want to delete this employee?')) {
          deleteEmployee(id);
        }
      } else if (e.target.classList.contains('edit-btn')) {
        const id = e.target.dataset.id;
        window.location.href = `form.ftlh?id=${id}`;
      }
    });
  }

  const form = document.getElementById('employee-form');
  if (form) {
    const urlParams = new URLSearchParams(window.location.search);
    const editId = parseInt(urlParams.get('id'));

    if (editId) {
      const emp = employees.find(e => e.id === editId);
      if (emp) {
        document.getElementById('employee-id').value = emp.id;
        document.getElementById('firstName').value = emp.firstName;
        document.getElementById('lastName').value = emp.lastName;
        document.getElementById('email').value = emp.email;
        document.getElementById('department').value = emp.department;
        document.getElementById('role').value = emp.role;
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const idField = document.getElementById('employee-id');
      const id = idField.value ? parseInt(idField.value) : Date.now();
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const department = document.getElementById('department').value;
      const role = document.getElementById('role').value;

      const employeeData = { id, firstName, lastName, email, department, role };

      const existingIndex = employees.findIndex(e => e.id === id);
      if (existingIndex !== -1) {
        employees[existingIndex] = employeeData;
        alert('Employee updated!');
      } else {
        employees.push(employeeData);
        alert('Employee added!');
      }

      localStorage.setItem('employees', JSON.stringify(employees));
      window.location.href = 'index.ftlh';
    });
  }
});
