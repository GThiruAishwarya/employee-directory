# Employee Directory Web Interface

This is a responsive, dynamic Employee Directory web application built as part of the Ajackus Frontend Assignment. It uses **HTML**, **CSS**, **Vanilla JavaScript**, and **Freemarker templates**. All data is managed client-side with local storage.

---

## 🔗 Live Demo

[Click to view deployed app on Vercel 🚀](https://employee-directory-psi.vercel.app/)

---

## 🚀 Features

- View a list of employees (cards)
- Add new employees
- Edit existing employee details
- Delete employees
- Real-time search (by name/email)
- Sort employees by name or department
- Toggle ascending/descending order
- Responsive design (desktop/tablet/mobile)
- Persistent data using localStorage

---

## 📁 Folder Structure

```
employee-directory/
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── data.js
│   ├── ui.js
│   └── utils.js
├── index.html
├── form.html
├── README.md
```

---

## 🛠️ How to Run

1. **Clone the repository**
2. Open the project in a local server or Freemarker-enabled backend (optional)
3. Open `index.ftlh` in your browser directly (for local testing)

If using Freemarker:
- Place `mockEmployees` in your controller and render `index.ftlh` using the model variable `employees`

---

## 📸 Screenshots

### 🖥️ Employee Directory (List View)
[🔗 View Screenshot](https://drive.google.com/file/d/1lOjQThx2yAARHptpebiPEzKCHAL9yi28/view?usp=sharing)

### 🧾 Add/Edit Employee Form
[🔗 View Screenshot](https://drive.google.com/file/d/1Y1A3w4Q--fIDebiHyQJsU4QS8a5GAPFs/view?usp=sharing)

*(Screenshots are hosted on Google Drive. Click to view.)*

---

## 💬 Reflection

### Challenges Faced
- Managing state without a backend required careful use of localStorage
- Ensuring sort/filter/search logic worked together
- Designing for mobile with clean layout and spacing

### Improvements if Given More Time
- Add pagination or infinite scroll
- Add undo for delete
- Better form error handling and tooltips
- More animations for better UX

---

## ✅ Evaluation Checklist

- [x] View, Add, Edit, Delete working
- [x] Sort, Filter, Search implemented
- [x] Responsive Design
- [x] Clean and modular code
- [x] Freemarker templates used
- [x] Validations handled
- [x] README + Screenshots included

