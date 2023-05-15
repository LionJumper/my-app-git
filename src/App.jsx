import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Nav';
import Picture from './components/Picture';
import About from './components/About';
import Posts from './components/Posts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App-Wrapper' >
        <Header />
        <Navbar />
        <div className='App-Wrapper-Content'>
     
        <Routes>
      
        <Route path='/picture' element={<Picture />}/>
        <Route  path='/about' element={<About />} />
        <Route  path='/posts' element={<Posts />} />
        
        </Routes>
        
        </div>
      </div>
      </BrowserRouter>
  );
}
export default App;
