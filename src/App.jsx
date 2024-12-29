// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './sections/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './sections/Footer'
import AboutPage from './pages/About'
import ProductsPage from './pages/Products'
import ContactPage from './pages/ContactPage'
import FaqsPage from './pages/FAQs'
function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<AboutPage/>} />
        <Route path='/Products' element={<ProductsPage />} />
        <Route path='/Contact' element={<ContactPage />} />
        <Route path='/FAQs' element={<FaqsPage />} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App