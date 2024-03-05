import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import About from './component/Pages/About/About';
import Service from './component/Pages/Service/Service';
import Blog from './component/Pages/Blog/Blog';
import Contact from './component/Pages/Contact/Contact';

const MainRoutes = () => {
  return (
    <div>
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/header' element={<Header />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Service />} />
            <Route path='/Blogs' element={<Blog />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default MainRoutes
