import React from 'react';
import styled from 'styled-components';

const Parent = styled.div`
  border: 1px solid blue;
  display: inline-block;

  position: relative;
  &:hover {
    color: red;
    cursor: pointer;
    .siblin {
      border: 3px solid yellow;
      width: 100%;
    }
  }
  .siblin {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    z-index: -1;
    transition-duration: 0.5s;
  }
  & > a {
    border: 1px solid red;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 1rem;
    z-index: 1000;
  }
`;

function KcLink(props) {
  return (
    <Parent>
      <div className="siblin"></div>
      <a href={props.href} className="lint-text">
        Go to this Link
      </a>
    </Parent>
  );
}

export default KcLink;
