import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/interface/Header';
import Main from './components/interface/Main';
import Footer from './components/user/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
