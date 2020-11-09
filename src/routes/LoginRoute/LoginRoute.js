import React, { Component } from 'react';
import './LoginRoute.css';
import LoginForm from '../../components/LoginForm/LoginForm';
import flagEngland from '../../images/england-flag-small.jpg';
import flagRussia from '../../images/russia-flag-small.jpg';
import flagGermany from '../../images/germany-flag-small.jpg';
import flagFrance from '../../images/france-flag-small.jpg';
import flagSpain from '../../images/spain-flag-small.jpg';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  };

  render() {
    return (
      <section className='login'>
        <span className='flag-belt'>
          <img className='flag' src={flagEngland} alt='English Flag' />
          {' '}
          <img className='flag' src={flagRussia} alt='Russian Flag' />
          {' '}
          <img className='flag' src={flagGermany} alt='German Flag' />
          {' '}
          <img className='flag' src={flagFrance} alt='French Flag' />
          {' '}
          <img className='flag' src={flagSpain} alt='Spanish Flag' />
        </span>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  };
};

export default LoginRoute;