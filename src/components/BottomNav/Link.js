import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  color: #263238;
  transition: color 100ms ease;
  &:hover, &.active {
    color: #90a4ae;
  }
`;

export default Link;
