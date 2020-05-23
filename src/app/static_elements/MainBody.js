import React from 'react';

import NavBar from './NavBar';

import background from '../../images/background-phone.jpg';

function MainBody (props) {
  return (

    <div>
      <NavBar/>
      <div className="section-full-page no-pad-bot" style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center-top',
        backgroundSize: 'cover'
      }}>
        <br/>
        {props.children}
      </div>
    </div>
  );
}

export default MainBody