import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "antd/dist/antd.css"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter basename="/">
     <App />
    </BrowserRouter>
  </StrictMode>
)
