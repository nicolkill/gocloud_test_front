import React from 'react';
import {
  Link,
} from "react-router-dom";

import MainBody from '../static_elements/MainBody';

function Success() {
  return (
    <MainBody>
      <div className="container">
        <div className="row center">
          <h3 className="header center white-text">Listo</h3>
          <Link to="/" className="btn-large waves-effect waves-light teal accent-4">Volver atras</Link>
        </div>
      </div>
    </MainBody>
  );
}

export default Success;
