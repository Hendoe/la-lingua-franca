import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  };

  renderLogoutLink() {
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  };

  renderLoginLink() {
    return (
      <nav>
        <span className='top-bar'>
          <Link className='item' to='/login'><h3>Login</h3></Link>
          {' '}
          <Link className='item' to='/register'><h3>Sign up</h3></Link>
        </span>
      </nav>
    )
  };

  render() {
    return (
      <header className='header'>
        <span className='title'>
          <Link to='/'>
            <h1 className='title-top'>La Lingua</h1>
            <h1 className='title-bottom'>    Franca</h1>
          </Link>
        </span>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  };
};

export default Header;