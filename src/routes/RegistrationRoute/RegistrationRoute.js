import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationRoute.css';
import flagEngland from '../../images/england-flag-small.jpg';
import flagRussia from '../../images/russia-flag-small.jpg';
import flagGermany from '../../images/germany-flag-small.jpg';
import flagFrance from '../../images/france-flag-small.jpg';
import flagSpain from '../../images/spain-flag-small.jpg';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  };

  render() {
    return (
      <section className='registrar'>
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
        <h3>
          Practice learning a language with the spaced reptition revision technique.
        </h3>
        <br />
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  };
};

export default RegistrationRoute;