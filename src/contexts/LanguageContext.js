import React, { Component } from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLanguage: () => {},
  setWords: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    const state = { user: {}, error: null };

    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
      }

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle)
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets()
      TokenService.queueCallbackBeforeExpiry(() => {
        this.fetchRefreshToken()
      })
    };
  };

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpiry()
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  };

  clearError = () => {
    this.setState({ error: null })
  };

  setLanguage = language => {
    this.setState({ language })
  };

  setWords = words => {
    this.setState([ words ])
  };


  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken()
        })
      })
      .catch(err => {
        this.setError(err)
      })
  };

  render() {
    const value = {
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLanguage: this.setLanguage,
      setWords: this.setWords,
    }
    return (
      <LanguageContext.Provider value={value}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  };
};