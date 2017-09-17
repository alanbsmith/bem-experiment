import styled from 'styled-components';

import Icon from './Icon';
import Subtitle from './Subtitle';
import Title from './Title';

const Header = styled.div`
  background-color: #607d8b;
  display: flex;
  padding: 5px 10px;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 400px;
  justify-content: center;
  flex: 1;
`;

Header.Icon = Icon;
Header.Subtitle = Subtitle;
Header.Title = Title;

export default Header;
