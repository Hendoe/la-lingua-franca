import React, { Component } from 'react';
//import LanguageApiService from '../services/language-api-service';
import LanguageContext from '../../contexts/LanguageContext';
import './DashboardRoute.css';
import flagEngland from '../../images/england-flag-small.jpg';
import flagRussia from '../../images/russia-flag-small.jpg';
import flagGermany from '../../images/germany-flag-small.jpg';
import flagFrance from '../../images/france-flag-small.jpg';
import flagSpain from '../../images/spain-flag-small.jpg';

class DashboardRoute extends Component {
  render() {
    return (
      <section className='dash'>
        <div className='flex-box'>
          <img className='dash-flag' src={flagGermany} alt='German Flag' />
          <h3 className='plate'>German</h3>
          {/* MAKE ABOVE DYNAMIC */}
        </div>
        <div className='flex-box'>
          <div className='dash-flag'>
            <h4>use a het fer all ov dis</h4>
            <ol>
              <li>German: 'die berge' English: 'the mountains' | 0/0</li>
              <li>German: 'hallo' English: 'hello' | 0/0</li>
              <li>German: 'schloss' English: 'castle' | 0/0</li>
              <li>German: 'gut' English: 'good' | 0/0</li>
              <li>German: 'sprechen' English: 'speak' | 0/0</li>
              <li>German: 'ja' English: 'yes' | 0/0</li>
              <li>German: 'die sterne' English: 'the stars' | 0/0</li>
              <li>German: 'tiger' English: 'tiger' | 0/0</li>
            </ol>
            {/* MAKE ABOVE LIST COME FROM CONTEXT */}
            <h4>TOTAL SCORE: 0/0</h4>
          </div>

          <h3 className='plate'>It's still German</h3>
        </div>
      </section>
    );
  };
};

export default DashboardRoute;