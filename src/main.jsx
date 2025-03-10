import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Router from './routes/Router.jsx';
import AuthProvider from './context/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  //<StrictMode>

    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>

  //</StrictMode>,
  //The double execution happens because React Strict Mode intentionally invokes components and effects twice to detect issues.
  //This results console output twice
)
