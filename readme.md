# Documentation for CrimeLogix Website

## Overview
This document provides an overview of the **CrimeLogix** website, a comprehensive platform designed for First Information Report (FIR) management. The platform aims to streamline the process of FIR filing, case tracking, and officer coordination.

## Key Features
- **Efficient FIR Filing**: A simple and intuitive interface to file a report quickly and securely.
- **Real-time Case Tracking**: Officers can view and track the progress of all FIRs filed within their jurisdiction (state, location, city, or union territory).
- **Case Management**: Officers have the ability to view, track, and update the status of cases as required.
- **Security for Officer Accounts**: The officer portal is restricted to login-only functionality. This is implemented to prevent unauthorized user creation and maintain data integrity within the system.
- **User-friendly Interface (UI/UX)**: The website has been designed with a focus on simplicity and ease of use, ensuring a seamless user experience for both public users and law enforcement officers.
- **Error Handling**: Robust error handling is implemented across all form components to ensure smooth and reliable access to the system.
- **Navigation and Routing**: The platform features easy navigation through well-designed buttons and links, enabling users to quickly access the desired pages.

## Technology Stack

**Frontend:**
- Framework: Angular 18
- Languages: HTML, CSS, TypeScript

**Backend:**
- Framework: Node.js (Express.js)

**Database:**
- MySQL (Managed via phpMyAdmin)

## Instructions for Deployment and Testing

1. **Download the Repository**: Clone or download the folder as a ZIP file from the GitHub repository.
2. **Navigate to Project Folder**: Open the terminal and navigate to the project folder location.
3. **Install Required Software**:
   - Install the latest version of **Node.js** on your system.
   - Install **Angular 18** globally by running the following command:
     ```bash
     npm install -g @angular/cli
     ```
4. **Connect to the Database**: 
   - Navigate to the `fir_management` folder in the integrated terminal of VS Code.
   - Run the command `nodemon` to establish a connection to the database.
5. **Serve the Frontend**:
   - Navigate to the `fir_management_frontend` folder in the integrated terminal.
   - Execute the following command to start the development server and serve the application locally:
     ```bash
     ng serve
     ```
   - The website will be accessible at `http://localhost:4200` for testing.
6. **API Endpoints**:
   - All API endpoints for the application are specified in the `controller.js` file located within the `fir_management` folder.
  
7. **Officer signup procedure**:
   -As the officer signup is not given one can signup officer or test the API using the API endpoint `localhost:4000/api/v1/caseportal` post method from postman app or directly inserting to the table(via phpmyadmin)

8.Totally there are three API endpoints they are

 -> `localhost:4000/api/v1/publicportal`,
 -> `localhost:4000/api/v1/policeportal`,
 -> `localhost:4000/api/v1/caseportal`.
 
 which contains all the basic CRUD operation,  and can be tested from postman app.


## Developer Details.

Aaron.D,
1st year, Electrical and Electronics Engineering,
NIT Puducherry (NITPY).


Thank You!!