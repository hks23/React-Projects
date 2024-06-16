import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact.jsx/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { Link } from 'react-router-dom'
import { githubInfoLoader } from './components/Github/Github.jsx'

// CREATING A ROUTER
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//different way to write above function
const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      {/* <Route path='github' element={<Github />} /> This way or another wau below */}
      <Route
        loader={githubInfoLoader} //what this does is that even before clicking the Github button it fetches the data and stores in cache
        path='github'
        element= {<Github/>}
      />

    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>   
  </React.StrictMode>,
)
