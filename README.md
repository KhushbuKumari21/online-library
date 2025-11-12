# Online Library System

## Overview
**Note:** This project uses **React (Vite)**, **Redux Toolkit**, and **CSS** for styling and responsive UI.

This is an Online Library System built using **React (Vite)** and **Redux Toolkit**.
It allows users to browse books by category, search for books, view detailed information, and add new books to the library.

## Features
**Home Page:**
  - Shows a welcome message and list of book categories with clickable buttons.
  - Displays popular books as cards with links to view more details.

**Browse Books Page:**
  - Displays books filtered by category using `/books/:category`.
  - Includes a search bar to filter books by title or author.

**Book Details Page:**
  - Dynamic route `/book/:id` to display selected book details.
  - Shows book title, author, category, description, and rating.
  - Includes a "Back to Browse" button to return to the previous category.

**Add Book:**
  - Form to add new books.
  - Validation for required fields.
  - Redux state management.

**404 Page:**
  - Handles undefined routes and shows the invalid URL.

- Responsive design using **CSS**.

## Installation & Running
**1.Clone the repository:**
git clone https://github.com/KhushbuKumari21/online-library
cd online-library


**2.Install dependencies**
  npm install 

**3.Start the development server** 
npm run dev

**4.Open the application**
http://localhost:5173/

**Github link :** https://github.com/KhushbuKumari21/online-library