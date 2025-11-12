# Online Library System

## Overview
This is an online library system built with **React (Vite)**, **Redux Toolkit**.  
It allows users to browse books by category, search for books, view book details, and add new books.

## Features
- Home Page:
  - Welcome message and book categories
  - Display of popular books
- Browse Books:
  - Filter books by category (`/books/:category`)
  - Search by title or author
- Book Details:
  - Dynamic route `/book/:id`
  - View title, author, description, rating
- Add Book:
  - Form to add new books
  - Validation for required fields
  - Redux state management
- 404 Page:
  - Handles undefined routes and shows the invalid URL
- Responsive design using **Bootstrap**

## Installation
1. Clone the repository:
```bash
git clone <your-github-repo-url>
cd online-library
npm install 
npm run dev
