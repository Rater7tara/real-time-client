import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProviders';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <div className='max-w-screen-2xl mx-auto'>
          <RouterProvider router={router} />
        </div>  
    </AuthProvider>

  </React.StrictMode>,
)
