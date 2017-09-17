import styled from 'styled-components';

import Link from './Link';

const BottomNav = styled.div`
  background: #cfd8dc;
  padding: 5px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

BottomNav.Link = Link;

export default BottomNav;
