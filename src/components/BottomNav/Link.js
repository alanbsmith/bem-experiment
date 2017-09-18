import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  color: #263238;
  transition: all 100ms ease;
  &:hover, &.active {
    color: #0097a7;
    transform: scale(1.1);
  }
`;

export default Link;
