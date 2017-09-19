import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

const Link = styled(UnstyledLink)`
  color: #263238;
  text-decoration: none;
  transition: color 0.1s ease;
  &:hover {
    color: #0097a7;
    text-decoration: underline;
  }
`;

export default Link;
