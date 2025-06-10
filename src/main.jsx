import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage.jsx'
import AboutUs from './Components/AboutUs.jsx'
import SignIn from './Components/SignInSignup/SignIn.jsx'
import SignUp from './Components/SignInSignup/SignUp.jsx'

const router =  createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "//signup",
        element: <SignUp></SignUp>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
