import styled from 'styled-components';

import Content from './Content';
import Heading from './Heading';


const Body = styled.div`
  background: #eceff1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 60px;
`;

Body.Content = Content;
Body.Heading = Heading;

export default Body;
