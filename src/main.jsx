import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import Details from './pages/Details.jsx'
import UpdateCoffee from './pages/UpdateCoffee.jsx'
import SignUp from './pages/SignUp.jsx'
import SignIn from './pages/SignIn.jsx'
import Users from './pages/Users.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "add-coffee",
        element: <AddCoffee />
      },
      {
        path: 'coffee-details/:id',
        element: <Details />
      },
      {
        path: "edit-coffee/:id",
        element: <UpdateCoffee />
      },
      {
        path: "sign-up",
        element: <SignUp />
      },
      {
        path: "sign-in",
        element: <SignIn />
      },
      {
        path: "users",
        element: <Users />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextProvider>
    <RouterProvider router={router}/>
  </ContextProvider>
  </StrictMode>,
)
