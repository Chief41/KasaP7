import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation, Footer,Logement, NotFound } from './components';

const App = () => {
  return (
    <div className='min-h-screen relative font-Montserrat'>
        <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/accomodation/:id' element={<Logement />} />
            <Route path='/*' element={<NotFound />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
};

export default App;