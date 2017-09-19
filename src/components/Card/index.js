import styled from 'styled-components';

import Title from './Title';
import Text from './Text';
import Icon from './Icon';
import Image from './Image';
import Link from './Link';

const Card = styled.div`
  background: #ffffff;
  border-radius: 2px;
  margin: 5px 5px 10px;
  padding: 5px;
  position: relative;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

Card.Title = Title;
Card.Text = Text;
Card.Link = Link;
Card.Icon = Icon;
Card.Image = Image;

export default Card;
