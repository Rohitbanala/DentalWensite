# Dental Clinic Website

This project is a dynamic modern website for a dental clinic, showcasing its services, contact details, and clinic information. The website is built using React used zod for validation and axios for api handling(just placeholders).

---

## Features

- **Component-Based Architecture**: Each section of the website (e.g., Contact Form, Services, etc.) is built as a reusable React component.
- **Form Validation**: Used `zod` to validate user input on the contact form, ensuring data integrity.
- **Axios Integration**: Incorporated `axios` for sending form data to a placeholder API (no backend connected).

---

## Tech Stack

- **Frontend**: React
- **Styling**: CSS
- **Form Validation**: Zod
- **HTTP Client**: Axios


## Installation

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Rohitbanala/DentalWensite
   cd dental-clinic-website


2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open the app in your browser at `http://localhost:5170`.

---

## Usage

### Placeholder Form Handling

* The contact form currently sends data to a placeholder using `axios`. You can replace the placeholder URL with your API endpoint when integrating with a backend.

---

## Validation with Zod

The form in the `ContactForm` component uses Zod for validation:

* All fields are validated to ensure proper input.
* Error messages are displayed dynamically based on validation results.

---

## Future Enhancements

* **Backend Integration**: Add backend APIs for handling form submissions and dynamic data.
* **Additional Features**: Add appointment booking, user authentication, and more.

---

## Acknowledgments

* [React](https://reactjs.org/)
* [Zod](https://zod.dev/)
* [Axios](https://axios-http.com/)

