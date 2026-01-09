TaskApp Frontend

Description
-----------
This is the frontend for TaskApp, built using HTML, CSS, and Vanilla JavaScript.
It communicates with the backend via REST APIs.

Technology Stack
----------------
- HTML
- CSS
- JavaScript (Vanilla JS)

Pages
-----
- index.html          : Login page
- register.html       : User registration
- reset-password.html : Password reset
- tasks.html          : Task dashboard

Features
--------
- User login and registration
- Password reset
- View tasks
- Create, edit, delete tasks
- Search, filter, and sort tasks
- Pagination
- Delete account option
- Responsive and clean UI

How to Run
----------
1. Make sure backend is running on:
   http://localhost:8080
2. Open index.html in a browser
   (or use Live Server in VS Code)

Backend Connection
------------------
Frontend sends requests to backend using fetch API.
JWT token is stored in browser localStorage and sent with requests.

Notes
-----
Frontend and backend are separated as required.
No framework is used to demonstrate core JavaScript skills.
