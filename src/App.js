import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Nav';
import Picture from './components/Picture';
import About from './components/About';

const App = () => {
  return (
    <div className='App-Wrapper'>
      <Header />
    <Navbar />
      
      <Picture />
      <About />
    </div>
  );
}





export default App;
