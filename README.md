# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 🌍 Earthquake Visualizer (React + Vite)

An interactive web application that visualizes real-time global earthquake data using the **USGS Earthquake API**.  
Built with **React (Vite)** and **plain CSS**, this project allows users to explore recent seismic activities on an interactive map.

---

## 🚀 Features

✅ Fetches live earthquake data from the **USGS API**  
✅ Displays interactive markers using **React Leaflet**  
✅ Clickable markers show **location, magnitude, depth, and time**  
✅ Includes a **Loading Spinner** and **Error Display**  
✅ Simple and responsive **Plain CSS design**  
✅ Works smoothly on both desktop and mobile

---

## 🧩 Tech Stack

| Technology                  | Purpose                          |
| --------------------------- | -------------------------------- |
| **React + Vite**            | Fast frontend framework          |
| **Leaflet / React-Leaflet** | Interactive map rendering        |
| **Plain CSS**               | Styling and layout               |
| **USGS Earthquake API**     | Real-time earthquake data source |

---

## 🗂️ Folder Structure

earthquake-visualizer/
│
├── src/
│ ├── components/
│ │ ├── ComponentMap.jsx
│ │ ├── ComponentMap.css
│ │ ├── ErrorDisplay.jsx
│ │ ├── ErrorDisplay.css
│ │ ├── LoadingSpinner.jsx
│ │ ├── LoadingSpinner.css
│ │
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│
├── index.html
├── package.json
└── README.md

## Installation and Setup

## 1️⃣ Clone the repository

git clone https://github.com/sonali131/earthquake-visualizer.git
cd earthquake-visualizer
cd earthquake-visualizer

## 2️⃣ Install dependencies

bash
Copy code
npm install

## 3️⃣ Run the app locally

bash
Copy code
npm run dev

## The app will be live at http://localhost:5173

## 🖼️ Screenshots

Screenshots are stored in the assets/ folder or can be uploaded to your GitHub repository.

## 🌐 Deployment

You can deploy this application easily using free services like:

CodeSandbox

StackBlitz

Vercel

Netlify
🧠 Acknowledgements

USGS Earthquake API

React Leaflet

Vite

Leaflet Documentation

## 👩‍💻 Author

## Sonali Mishra

📧 mishrasonali1198@gmail.com

🌍 LinkedIn Profile https://www.linkedin.com/in/sonali-mishra-4239aa250/
| GitHub Profile https://github.com/sonali131

## 🏁 Project Info

This project was built as part of the Aganitha Take-Home Challenge (2024–25)
Demonstrates understanding of:

Frontend development using React

API integration

Interactive visualization

Clean UI/UX and responsive design
