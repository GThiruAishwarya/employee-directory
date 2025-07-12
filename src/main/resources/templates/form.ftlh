<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Employee Form</title>
  <link rel="stylesheet" href="/static/css/style.css" />
</head>
<body>
  <div class="container">
    <h2>${employee??"Edit Employee" : "Add Employee"}</h2>
    <form id="employee-form">
      <input type="hidden" id="employee-id" value="${employee.id!}" />
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" value="${employee.firstName!}" required />

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" value="${employee.lastName!}" required />

      <label for="email">Email:</label>
      <input type="email" id="email" value="${employee.email!}" required />

      <label for="department">Department:</label>
      <input type="text" id="department" value="${employee.department!}" required />

      <label for="role">Role:</label>
      <input type="text" id="role" value="${employee.role!}" required />

      <button type="submit">Save</button>
      <button type="button" onclick="window.history.back()">Cancel</button>
    </form>
  </div>
  <script src="/static/js/app.js"></script>
</body>
</html>
