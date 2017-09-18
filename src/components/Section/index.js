import styled from 'styled-components';

import Title from './Title';
import Text from './Text';

const Section = styled.div`
  flex: 1;
  display: flex;
  align-items: ${({ rightAlign }) => rightAlign ? 'flex-end' : 'flex-start' };
  text-align: ${({ rightAlign }) => rightAlign ? 'end' : 'initial' };
  flex-direction: column;
  min-height: 200px;
  padding: 5px;
`;

Section.Title = Title;
Section.Text = Text;

export default Section;
