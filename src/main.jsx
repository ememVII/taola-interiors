import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min.js";
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
