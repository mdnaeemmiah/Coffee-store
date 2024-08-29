import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdatedCoffee from './Components/UpdatedCoffee.jsx';
import SingUp from './Components/SingUp.jsx';
import SingIn from './Components/SingIn.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch(' https://naeem-56-52ga6vvut-ailas-projects-e6327532.vercel.app/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: '/updatedCoffee/:id',
    element: <UpdatedCoffee></UpdatedCoffee>,
    loader: ({ params }) => fetch(` https://naeem-56-52ga6vvut-ailas-projects-e6327532.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/singup',
    element: <SingUp></SingUp>
  },
  {
    path: '/singin',
    element: <SingIn></SingIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=> fetch(' https://naeem-56-52ga6vvut-ailas-projects-e6327532.vercel.app/user')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
