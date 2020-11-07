import React from 'react'

import './App.css'
import { About } from './components/About';
import Contato from './components/Contato';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App" >
      <Header />
      <Menu />
      <About />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
