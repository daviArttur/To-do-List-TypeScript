import React from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { UserContext } from './helper/store';
import './App.css'


function App() {

  return (
    <UserContext>
      <Header />
      <Main />
      <Footer />
    </UserContext>
  );
}

export default App;
