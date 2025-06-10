import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './sections/About.jsx';
import Project from './components/Project.jsx';
import Contact from './sections/Contact.jsx';


const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/about", element: <About />},
  {path: "/work", element: <Project />},
  {path: "/contact", element: <Contact />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
