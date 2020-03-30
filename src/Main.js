import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Main = () => (
  <div>

    <Parallax
      bgImage={require('./images/people.png')}
      bgImageAlt="people"
      strength={200}
    >
      <div style={{ height: '100vh' }} />
    </Parallax>

    <Parallax
      bgImage={require('./images/home.png')}
      bgImageAlt="home"
      strength={200}
    >
      <div style={{ height: '100vh' }} />
    </Parallax>

    <Parallax
      bgImage={require('./images/car.png')}
      bgImageAlt="car"
      strength={200}
    >
      <div style={{ height: '100vh' }} />
    </Parallax>
    
  </div>
);
export default Main;