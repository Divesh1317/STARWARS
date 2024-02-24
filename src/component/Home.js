import React from 'react';
import './Home.css';
import videoBg from '../videoBg.mp4';
import './Font.ttf';
const Home = () => {
  return (
    <section>
      <video src={videoBg} autoPlay loop muted className='video-bg'></video>
      <div className="write">
        Welcome to the star Wars
      </div>
    </section>
  );
}

export default Home;
