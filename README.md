JM Motors — Car Dealership Web App

A modern, responsive car dealership web application built with **React**, **Tailwind CSS**, **Firebase Authentication**, and the **API Ninjas Cars API**.  
Users can browse cars for sale, view detailed specifications, and securely log in using email/password or Google authentication.

---

## Features

### Firebase Authentication
- Secure login and signup functionality.
- Supports both **email/password** and **Google Sign-In**.

###  Live API Integration
- Fetches **real car data** dynamically from the [API Ninjas Cars API](https://api-ninjas.com/api/cars).
- Displays make, model, year, fuel type, and more.

###  React Router Navigation
- Smooth **client-side routing** between pages:  
  `Home`, `Cars for Sale`, `About Us`, and `Contact`.

###  Tailwind CSS Design
- Clean, modern, and fully **responsive** design.
- Consistent color scheme with professional typography and layout.

###  Mobile Responsive
- Optimized for all screen sizes — **mobile**, **tablet**, and **desktop**.

### Automated Deployment
- Deployed via **GitHub Actions** for continuous integration and delivery.
- Supports easy updates and version control.

---

## 🧰 Tech Stack

- **React.js** — Frontend framework  
- **Tailwind CSS** — Styling  
- **Firebase** — Authentication and hosting  
- **API Ninjas** — Car data API  
- **React Router DOM** — Page navigation  

---

## ⚙️ Installation & Setup

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/jm-motors.git

# 2. Navigate into the project folder
cd jm-motors

# 3. Install dependencies
npm install

# 4. Run the development server
npm start

Environment setup
Copy code
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_API_NINJAS_KEY=your_api_key
🖥️ Deployment
The app is automatically deployed using GitHub Actions or manually through:

bash
Copy code
npm run build
Then deploy the /build folder to your hosting service (e.g., Firebase Hosting or Netlify).

 About
JM Motors is a sleek, interactive car dealership platform designed to make car browsing simple and enjoyable.
Built with performance, design, and user experience in mind — it’s a modern web solution for digital auto businesses.
 Author
Joy Missoy

 License
This project is licensed under the MIT License — feel free to use and modify it.
