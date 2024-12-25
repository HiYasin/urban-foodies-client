import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Router from './routes/Router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={Router} />

  </StrictMode>,
  //The double execution happens because React Strict Mode intentionally invokes components and effects twice to detect issues.
  //This results console output twice
)
