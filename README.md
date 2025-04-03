To-Do List App

This is a simple To-Do List web application built using HTML, Tailwind CSS, and JavaScript. 
The app allows users to create, edit, delete, and mark tasks as completed.

Features
Add new tasks dynamically
Edit tasks
Delete tasks
Mark tasks as completed using the line-through effect

Technologies Used
HTML: Structure of the web page
Tailwind CSS: Styling and layout
JavaScript: Dynamic functionality
FontAwesome: Icons for UI elements

How It Works
- Click the "Create To-Do List" button to add a new task.
- Type in the task name in the input field.
- Click the check icon (✔) to mark the task as complete.
- Click the input box to modify the task.
- Click the trash icon (🗑️) to delete the task.


HTML (index.html)
- Contains a button to create tasks.
- Input fields for task entry.
- A container (.input-box) where tasks are dynamically added.

Tailwind CSS
- Used for styling and responsiveness.

JavaScript (script.js)
- Uses document.createElement() to add new elements.
- addEventListener() is used for button actions (create, delete, edit, complete).
- The line-through effect is added using classList.toggle("line-through").
