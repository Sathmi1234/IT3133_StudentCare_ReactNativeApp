# UoV Student Care App

A React Native application designed for students at the University of Virtual (UoV) to manage and access their profile, course, and subject details efficiently.

## Features

- **Login System**: Students can log in using their username and password.
- **Profile Management**: Students can view their personal and contact details.
- **Courses**: Displays information about the student's enrolled course.
- **Subjects**: Displays a list of subjects and marks for the logged-in student.
- **Navigation**: Bottom navigation to switch between Profile, Courses, and Subjects.

## Screens Overview

### Login Screen
- Allows students to log in using their credentials.
- Displays error messages for invalid credentials.

### Main Screen
- Contains bottom navigation with three tabs:
  1. **Profile**
  2. **Courses**
  3. **Subjects**

### Profile Screen
- Displays the student's personal information including:
  - Name
  - Age
  - Gender
  - Contact Information
  - Biological Information

### Courses Screen
- Displays details about the student's course:
  - Course Name
  - Course Code
  - Department
  - Duration
  - Description

### Subjects Screen
- Lists the subjects associated with the student's course along with their marks.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm or yarn
- React Native CLI

## Folder Structure

```plaintext
.
├── assets
│   ├── Logo.png         # App logo
│   ├── StudentsDb.js    # Mock database for students, courses, subjects, and marks
├── components
│   ├── Courses.js       # Courses screen component
│   ├── Login.js         # Login screen component
│   ├── Main.js          # Main screen with bottom navigation
│   ├── Profile.js       # Profile screen component
│   ├── Subjects.js      # Subjects screen component
├── App.js               # Root of the application
├── README.md            # Project documentation
├── package.json         # Project dependencies and metadata
```

## Technologies Used

- **React Native**: Frontend framework for building mobile applications.
- **React Navigation**: For navigation between screens.
- **React Native Paper**: UI components and theming.

### Output


## Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the application on an emulator or physical device:
   ```bash
   npm run android
   # or
   npm run ios
   ```
