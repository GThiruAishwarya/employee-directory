// static/js/ui.js
function renderEmployeeList(employees) {
  const list = document.getElementById('employee-list');
  list.innerHTML = '';
  employees.forEach(e => {
    const card = document.createElement('div');
    card.className = 'employee-card';
    card.innerHTML = `
      <h3>${e.firstName} ${e.lastName}</h3>
      <p>Email: ${e.email}</p>
      <p>Department: ${e.department}</p>
      <p>Role: ${e.role}</p>
      <button class="edit-btn" data-id="${e.id}">Edit</button>
      <button class="delete-btn" data-id="${e.id}">Delete</button>
    `;
    list.appendChild(card);
  });
}
