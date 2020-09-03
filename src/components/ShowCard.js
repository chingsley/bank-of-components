import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Parent = styled.div`
  ${({ props }) => {
    // console.log(props);
    return css`
      border: 1px solid lightblue;
      width: 4rem;
      min-height: 2rem;
      background-color: '#fafbfc';
    `;
  }}
`;

/**
 *
 * @param {*} props
 * I paused at trying to figure out how to pass a component as a props to ShowCard
 * and have it rendered here in ShowCard
 */
const ShowCard = (props) => {
  return <Parent props={props}></Parent>;
};

export default ShowCard;
