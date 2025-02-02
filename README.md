# Pet Adoption Website
![macmonitor (1)](https://github.com/aninnda/Adopt-a-Pet/blob/6bfe13680af981d598d13b0e02f23845ba950383/Screenshot%202025-02-02%20at%203.16.08%20PM.png)

## Table of Contents
- [Introduction](#introduction)
- [Project Goals](#project-goals)
- [User Stories](#user-stories)
- [Features](#features)
  - [User Authentication](#user-authentication)
  - [Text Files as Database](#text-files-as-database)
  - [Pet Search and Giveaway](#pet-search-and-giveaway)
  - [JavaScript Functionality](#javascript-functionality)
- [Technologies Used](#techonologies)
  - [Front-end Technologies](#front-end-technologies)
  - [Back-end Technologies](#back-end-technologies)
- [Challenges and Learning](#challenges-and-learning)
- [How to Run the Project](#how-to-run-the-project)
- [What I Would Do Differently](#what-i-would-do-differently)

## Introduction
This Pet Adoption Website marks my first full-stack web application, created as part of a university web programming course. The platform aims to simplify the pet adoption process by enabling users to browse available pets, create accounts, and even offer pets for adoption if they can no longer care for them. Throughout this project, I gained hands-on experience in both front-end and back-end development, with the added challenge of using basic text files as a lightweight database solution.

## Project Goals
The main goals of this project are:
- Develop a fully functional web application simulating a pet adoption platform, enabling user interaction.
- Implement basic CRUD (Create, Read, Update, Delete) operations, utilizing text files as a simple data storage solution.
- Gain hands-on experience with user authentication, form validation, and session management.
- Design a user-friendly interface to facilitate searching, adding, and managing pet adoption listings.

## User Stories
- As a user, I want to search for adoptable pets based on criteria such as breed, age, and compatibility with other pets and children.
- As a user, I want to offer a pet for adoption by filling out a comprehensive form detailing the pet's information.
- As a user, I want to create an account and log in to manage my pet listings and submissions.
- As a user, I want to receive a notification if I'm not signed in when trying to access restricted features, like submitting a pet for adoption.

## Features
### 1. User Authentication
- Sign Up: Users can create an account by providing a username and password. The sign-up process includes the following validation rules:
   - Username: Must consists of only letters and digits.
   - Password: Must be at least 4 characters long, containing at least one letter and one digit.
- Log In: Users can log in using their credentials. The application will notify users if their username or password is incorrect.
- Logout: The "Logout" option in the navigation menu is accessible only to signed-in users, with session management handled through the sessions package.

### 2. Text Files as a Database
- Data Storage: The application uses text files (available.txt, login.txt) as a basic simulation of a database.
   - available.txt: Stores pet records, with each line containing pet details such as ID, username, type, breed, age, gender, compatibility with other animals, description, owner, and email—separated by colons.
   - login.txt: Stores user credentials, where each line consists of a username and password, also separated by a colon. While not secure, this method provides a simple way to practice file I/O operations for user authentication.

### 3. Pet Search and Giveaway
- Search Form:  Users can search for adoptable pets based on criteria such as breed, age, and compatibility with other pets and children. The search results are dynamically displayed based on the selected parameters.
- Giveaway Form: Logged-in users can submit pets for adoption through a detailed form, which includes validation to ensure all required information is provided. If a user is not logged in and attempts to access the giveaway form, they are prompted to log in first.

### 4. JavaScript Functionality
- Form Handling: JavaScript is used to manage form submissions, sending data to the server via the Fetch API and dynamically updating the DOM with the results.
- Dynamic Content: JavaScript dynamically generates content based on user actions, such as displaying search results or showing error notifications.
- Session Management: JavaScript integrates with server-side session management to control user access to restricted features.

## Technologies Used

### Front-end Technologies

- HTML: Provides the overall structure of the website.
- CSS: Styles the website, focusing on a clean and simple design.
- JavaScript: Adds interactivity and handles form submissions and DOM manipulation.
  
### Back-end Technologies

- Node.js: Powers the server-side logic, handling routes, processing form data, and managing sessions.
- File I/O: Reads from and writes to text files to simulate database operations.

## Challenges and Learning

This project was a significant learning experience in full-stack web development. Here are some of the key challenges and what I learned:

- Repetitive HTML: The project included multiple HTML files with similar structures (e.g., navbar and footer). This redundancy made me realize the benefits of using a templating engine or front-end framework to streamline the management of repeated elements.
- Basic Security: Storing user credentials in plain text files is insecure and unsuitable for production environments. However, this approach was a great way to practice basic file I/O operations and gain an understanding of the importance of security in web applications.
- JavaScript and DOM Manipulation: Working with JavaScript to handle form submissions and dynamically update the DOM was a valuable experience, reinforcing the importance of front-end interactivity and user experience.
  
## How to Run the Project

To run this project locally:

1. Download the code as a zip file and navigate to the project directory:
```
cd Adopt-a-Pet
```
2. Install the necessary dependencies:
```
npm install
```
3. Run the server:
```
node server.js
```
4. Open your brower and go to:
```
http://localhost:3000
```
You can also have access to the website I have deployed using render through the following link: https://adopt-a-pet-1.onrender.com/


### What I Would Do Differently
Looking back on this project, there are several improvements I would consider:

- Use of a Database: Switch from text file-based storage to a proper database like MongoDB or PostgreSQL to improve data security and scalability.
- Front-end Frameworks: Use a JavaScript front-end framework like React or Angular to reduce HTML redundancy and streamline the management of components like the navbar and footer.
- Templating Engine: Integrate a templating engine such as EJS or Handlebars to dynamically generate HTML content and minimize repetitive code across multiple pages.
- Enhanced Security: Implement stronger authentication and authorization methods, including password hashing and using environment variables to securely store sensitive data.
