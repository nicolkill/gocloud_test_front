import React, { Component } from 'react';

import MainBody from '../static_elements/MainBody';

import axios from '../../config/axios';

class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      rut: '',
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleRegister = async (event) => {
    const canRequest = Object.keys(this.state).reduce((acc, key) => acc && !!this.state[key], true);
    if (!canRequest) return;

    event.preventDefault();

    try {
      await axios.request({
        method: 'post',
        url: '/landing/subscriptions',
        data: this.state,
      });
      this.props.history.push('/success');
    } catch (err) {
      if (err.response.status === 409) {
        this.setState({ hasError: true });
      }
    }
  };

  render() {
    return (
      <MainBody>
        <div className="container">

          <h3 className="header center white-text">Cursos de <br/> Verano +NEM</h3>
          <div className="row center">
            <span className="header col s12 light white-text">No dejes pasar esta increile oportunidad. Inscribite acá</span>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12 m6 ">
                  <input
                    id="name"
                    type="text"
                    className="validate field"
                    placeholder="Ej. Jose Canseco"
                    value={this.state.name}
                    onChange={this.handleFieldChange}
                    minLength="1"
                    required
                  />
                  <label htmlFor="name" className="label">
                    <span className="white-text">Nombre</span><span className="red-text">*</span>
                  </label>
                  <span className="helper-text" data-error="Este campo no puede estar vacio"/>
                </div>
                <div className="input-field col s12 m6">
                  <input
                    id="phone"
                    type="text"
                    className="validate field"
                    placeholder="Ej. +569 3772 9376"
                    value={this.state.phone}
                    onChange={this.handleFieldChange}
                    minLength="1"
                    required
                  />
                  <label htmlFor="phone" className="label">
                    <span className="white-text">Teléfono</span><span className="red-text">*</span>
                  </label>
                  <span className="helper-text" data-error="Este campo no puede estar vacio"/>
                </div>
                <div className="input-field col s12 m6 ">
                  <input
                    id="email"
                    type="email"
                    className="validate field"
                    placeholder="Ej. correo@gmail.com"
                    value={this.state.email}
                    onChange={this.handleFieldChange}
                    minLength="1"
                    required
                  />
                  <label htmlFor="email" className="label">
                    <span className="white-text">Correo</span><span className="red-text">*</span>
                  </label>
                  <span className="helper-text" data-error="Debes ingresar un email valido"/>
                </div>
                <div className="input-field col s12 m6">
                  <input
                    id="rut"
                    type="text"
                    className="validate field"
                    placeholder="Ej. 26.492.283-1"
                    value={this.state.rut}
                    onChange={this.handleFieldChange}
                    minLength="1"
                    required
                  />
                  <label htmlFor="rut" className=" label">
                    <span className="white-text">RUT</span><span className="red-text">*</span>
                  </label>
                  <span className="helper-text" data-error="Este campo no puede estar vacio"/>
                </div>
                <div className="col s12">
                  <button
                    onClick={this.handleRegister}
                    id="register-button"
                    className="btn-large waves-effect waves-light teal accent-4">
                    Inscribirse
                  </button>
                </div>
              </div>
              { this.state.hasError && <div className="row">
                <div className="col s12 center">
                  <span className="header col s12 light red-text">Estos datos ya han sido registrados.</span>
                </div>
              </div> }
            </form>
          </div>
        </div>
      </MainBody>
    );
  }
}

export default MainPage;
