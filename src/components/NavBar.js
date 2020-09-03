import React from 'react';
import styled from 'styled-components';
import KcLink from './KcLink';

const Nav = styled.div`
  // border: 1px solid red;
  height: 12vh;
  background-color: #fafbfc;
  // margin-bottom: 4rem;
  // box-shadow: 0 20px 20px -28px #34495e;
  // border-bottom: 1px solid transparent;

  position: fixed;
  top: 0;
  width: 100%;

  .nav-ul {
    // border: 1px solid #2980b9;
    height: 100%;
    display: flex;
    padding: 0;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    list-style-type: none;

    li {
      margin-right: 1.3rem;
    }
  }
`;

function NavBar() {
  return (
    <Nav>
      <ul className="nav-ul">
        <li>
          <KcLink
            text="Login"
            to="/login"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="white"
            // bottomBorderOnHover='2px solid #b71540'
          />
        </li>
        <li>
          <KcLink
            text="Components"
            to="/components"
            color="#34495e"
            bgColorOnHover="#d63031"
            colorOnHover="white"
          />
        </li>
        <li>
          <KcLink
            text="Layouts"
            to="/layouts"
            color="#34495e"
            bgColorOnHover="#2d3436"
            colorOnHover="#f5f6fa"
          />
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
