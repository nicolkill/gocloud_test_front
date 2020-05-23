import React from 'react';

import logo from '../../images/Imagen1-620x264.png';

function NavVar () {
  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="!#" className="brand-logo">
          <img src={logo} alt="Logo" className="logo"/>
        </a>
      </div>
    </nav>
  );
}

export default NavVar