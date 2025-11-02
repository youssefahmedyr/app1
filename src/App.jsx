import { useState } from 'react'
import Home from './assets/Components/Home/Home.jsx'
import About from './assets/Components/About/About.jsx'
import NotFound from './assets/Components/NotFound/NotFound.jsx'
import Layout from './assets/Components/Layout/Layout.jsx'
import Portfolio from './assets/Components/Portfolio/Portfolio.jsx'
import Contact from './assets/Components/Contact/Contact.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  let routers = createBrowserRouter([
    {
      path: '/', 
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])
  
  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App