import styled from 'styled-components';

const A = styled.a`
  color: #263238;
  text-decoration: none;
  transition: color 0.2s ease;
  transition: all 100ms ease;
  &:hover {
    color: #0097a7;
    text-decoration: underline;
  }
`;

export default A;
