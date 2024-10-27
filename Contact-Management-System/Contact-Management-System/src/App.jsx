import React,{ useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ContactList from './components/contacts/ContactList'
 /* The following line can be included in your src/index.js or App.js file
 to use bootstrap without installation */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import './bootstrap.min.css'



function App() {

  return (
    <>
    <Navbar/>
    <ContactList/>
    <ToastContainer/>
    </>
  )
}

export default App
