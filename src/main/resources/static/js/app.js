// static/js/app.js
let employees = [...mockEmployees];

function deleteEmployee(id) {
  employees = employees.filter(e => e.id !== id);
  renderEmployeeList(employees);
}

document.addEventListener('DOMContentLoaded', () => {
  renderEmployeeList(employees);

  document.getElementById('employee-list').addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
      const id = parseInt(e.target.dataset.id);
      if (confirm('Delete employee?')) deleteEmployee(id);
    }
    // Edit handler to be added
  });
});
