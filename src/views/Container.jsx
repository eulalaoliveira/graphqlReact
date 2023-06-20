/**
 * cruisey club page container
 * @author Larissa Oliveira Santos
 */

import React from 'react';
import Title from '../components/Title';
import NavBar from '../components/NavBar';
import videoTopGun from '../assets/videoTopGun.mov';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function CruiseyClub() {

  return (
    <main>
      <NavBar />
      <div className='bgVideo'>
        <div className="overlay"></div>
        <Title />
        <video src={videoTopGun} autoPlay loop muted />
      </div>
      <SearchBar />
      <Footer />
    </main>
  );
}
