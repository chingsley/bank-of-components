import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from '../store/actions';

export const AuthForm = styled.form`
  // border: 1px solid salmon;
  text-align: center;
  display: flex;
  justify-content: space-between;
  // margin-right: 2rem;

  .left-inputs-in-form {
    // width: 18rem;
    width: 55%;
    .form-control,
    .auth-btn {
      box-sizing: border-box;
      height: 2.5rem;
      margin: 0.3rem 0;
      font-size: 12px;
    }

    .form-control {
      display: inline-block;
      width: 100%;
      padding-left: 1.5rem;
    }

    .auth-btn {
      display: inline-block;
      cursor: pointer;
      width: 100%;
      margin-bottom: 2rem;
      background-color: black;
      color: white;
      font-weight: bold;
      border-radius: 0.25rem;
      border: none;
    }
  }
  .right-content-in-form {
    // border: 1px solid red;
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    },
  };

  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.loginUser(this.state.credentials);
  };
  render() {
    return (
      <AuthForm onSubmit={this.handleFormSubmit}>
        <div className="left-inputs-in-form">
          <input
            name="username"
            className="form-control"
            type="text"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            className="form-control"
            type="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleInputChange}
          />
          <button className="auth-btn">Login</button>
        </div>
      </AuthForm>
    );
  }
}

const mapStateToProps = ({ isLoading, error, token }) => ({
  isLoading,
  error,
  token,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
