import React from 'react';
import Navbar from './components/NavBar';
import Header from './components/Header';
import CardList from './components/CardList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CardList />
    </div>
  );
};

export default Home;
