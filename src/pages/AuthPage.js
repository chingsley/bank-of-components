import React from 'react';
import loginImage from '../assets/loginImage.jpg';
import LoginForm from '../components/LoginForm';

import '../styles/authPage.css';

class AuthPage extends React.Component {
  changeForm = (e) => {
    e.persist();

    this.setState((prevState) => {
      const newState = Object.keys(prevState).reduce((obj, key) => {
        if (key !== e.target.dataset.name) {
          return { ...obj, [key]: false };
        }

        return { ...obj, [e.target.dataset.name]: true };
      }, {});
      return { ...prevState, ...newState };
    });
  };
  render() {
    // console.log(this.state);
    return (
      <div className="signup-page">
        <div className="page-content">
          <div className="content-left">
            <img src={loginImage} alt="person-reading" width="235" />
          </div>
          <div className="content-right">
            <>
              <LoginForm />
            </>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthPage;
