import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './MainContent/Main';
import Home from './Home/Home/Home';
import Edu from './Home/Projects/Edu';
import Flick from './Home/Projects/Flick';
import Eco from './Home/Projects/Eco';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/edu',
        element: <Edu></Edu>
      },
      {
        path: '/flick',
        element: <Flick></Flick>
      },
      {
        path: '/eco',
        element: <Eco></Eco>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
