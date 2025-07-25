let employees = [...mockEmployees];
let currentSort = 'firstName'; // corrected default sort key
let sortAsc = true;

function saveToStorage() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

function loadFromStorage() {
  const stored = localStorage.getItem('employees');
  if (stored) {
    employees = JSON.parse(stored);
  }
}

function deleteEmployee(id) {
  employees = employees.filter(e => e.id !== id);
  saveToStorage();
  renderEmployeeList(employees);
}

function getEmployeeById(id) {
  return employees.find(e => e.id === id);
}

function updateOrAddEmployee(employee) {
  const index = employees.findIndex(e => e.id === employee.id);
  if (index !== -1) {
    employees[index] = employee;
  } else {
    employees.push(employee);
  }
  saveToStorage();
}

function sortEmployees(list, key, asc = true) {
  return [...list].sort((a, b) => {
    const valA = (a[key] || '').toLowerCase();
    const valB = (b[key] || '').toLowerCase();
    if (valA < valB) return asc ? -1 : 1;
    if (valA > valB) return asc ? 1 : -1;
    return 0;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();

  const listContainer = document.getElementById('employee-list');
  if (listContainer) {
    renderEmployeeList(sortEmployees(employees, currentSort, sortAsc));

    document.getElementById('search-input')?.addEventListener('input', e => {
      const value = e.target.value.toLowerCase();
      const filtered = employees.filter(emp =>
        (emp.firstName || '').toLowerCase().includes(value) ||
        (emp.lastName || '').toLowerCase().includes(value) ||
        (emp.email || '').toLowerCase().includes(value)
      );
      renderEmployeeList(sortEmployees(filtered, currentSort, sortAsc));
    });

    document.getElementById('sort-select')?.addEventListener('change', e => {
      currentSort = e.target.value;
      renderEmployeeList(sortEmployees(employees, currentSort, sortAsc));
    });

    document.getElementById('sort-toggle')?.addEventListener('click', () => {
      sortAsc = !sortAsc;
      renderEmployeeList(sortEmployees(employees, currentSort, sortAsc));
    });

    listContainer.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure?')) {
          deleteEmployee(id);
        }
      } else if (e.target.classList.contains('edit-btn')) {
        window.location.href = `form.html?id=${id}`;
      }
    });
  }

  const form = document.getElementById('employee-form');
  if (form) {
    const params = new URLSearchParams(window.location.search);
    const editId = parseInt(params.get('id'));

    if (editId) {
      const emp = getEmployeeById(editId);
      if (emp) {
        document.getElementById('employee-id').value = emp.id;
        document.getElementById('firstName').value = emp.firstName;
        document.getElementById('lastName').value = emp.lastName;
        document.getElementById('email').value = emp.email;
        document.getElementById('department').value = emp.department;
        document.getElementById('role').value = emp.role;
      }
    }

    form.addEventListener('submit', e => {
      e.preventDefault();

      const id = document.getElementById('employee-id').value
        ? parseInt(document.getElementById('employee-id').value)
        : Date.now();

      const newEmp = {
        id,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        department: document.getElementById('department').value,
        role: document.getElementById('role').value
      };

      updateOrAddEmployee(newEmp);
      alert(editId ? 'Employee updated!' : 'Employee added!');
      window.location.href = 'index.html';
    });

    document.getElementById('cancel-btn')?.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});
