import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Layout/ErrorPage";
import Main from "../Layout/Main";
import AddATask from "../Pages/AddATask/AddATask";
import AllTasks from "../Pages/AllTasks/AllTasks";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/alltasks',
          element: <AllTasks></AllTasks>
        },
        {
          path: 'addtasks',
          element: <AddATask></AddATask>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        
      ]
    }, 
    ]);