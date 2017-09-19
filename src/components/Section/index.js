import styled from 'styled-components';

import Title from './Title';
import Text from './Text';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  padding: 5px;
`;

Section.Title = Title;
Section.Text = Text;

export default Section;
