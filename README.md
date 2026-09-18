# Connectly

A modern web-based **Connectly** built with JavaScript and Supabase. The application provides user authentication and allows authenticated users to create, manage, and delete posts through a simple and responsive interface.

## Overview

This project demonstrates how a frontend application can be integrated with **Supabase Authentication and Database** to build a functional user-based posting system.

Users can create an account, securely log in, and manage their posts after authentication.

## Features

### Authentication

* User registration (Sign Up)
* User login
* Authentication using Supabase
* Protected post functionality for authenticated users

### Post Management

* Create and publish posts
* Display posts from the database
* Delete posts
* Store post data in Supabase
* User-based post management

### Database

* Supabase PostgreSQL database
* Persistent storage for posts
* Authentication integrated with database operations

## Technologies

| Technology | Purpose                             |
| ---------- | ----------------------------------- |
| HTML5      | Application structure               |
| CSS3       | Styling and responsive UI           |
| JavaScript | Application logic and functionality |
| Supabase   | Authentication and database         |

## Application Flow

```text
User Registration
       ↓
Supabase Authentication
       ↓
User Login
       ↓
Authenticated User
       ↓
Create / View / Delete Posts
       ↓
Supabase Database
```

## Project Structure

```text
project/
│
├── index.html
├── signup.html
├── login.html
├── style.css
├── app.js
└── README.md
```

> File names may vary depending on the final project structure.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project

Open the project folder in your preferred code editor, such as **Visual Studio Code**.

### 3. Configure Supabase

Create a Supabase project and configure the required:

* Supabase Project URL
* Supabase Anon/Publishable Key
* Authentication settings
* Database table for posts

### 4. Run the application

Open the project using a local development server, such as **Live Server** in Visual Studio Code.

## Future Improvements

Planned improvements may include:

* Edit and update posts
* User profile management
* Image/file uploads
* Search and filtering
* Improved responsive design
* Row Level Security (RLS) policies for enhanced database security

## Purpose

The main purpose of this project is to practice building a database-driven web application with **JavaScript and Supabase**, while implementing authentication and basic CRUD operations.

## Author

**Fabiha**

Built with JavaScript and Supabase.
