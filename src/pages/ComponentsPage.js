import React from 'react';
import styled, { css } from 'styled-components';
import KcLink from '../components/KcLink';

const Page = styled.div`
  ${({ props }) => {
    return css`
      border: 2px solid gray;
      padding: 2rem;
    `;
  }}
`;

class ComponentsPage extends React.Component {
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
      <Page className="components-page">
        <KcLink
          text="hover over me!"
          to="/login"
          color={'#34495e'}
          bgColorOnHover={'#eb2f06'}
          colorOnHover={'white'}
          // bottomBorderOnHover={'2px solid #eb2f06'}
        />
      </Page>
    );
  }
}

export default ComponentsPage;
