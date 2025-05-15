import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import AddCoffee from './pages/AddCoffee.jsx'


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
