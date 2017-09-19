import styled from 'styled-components';

const Text = styled.div`
  font-size: 18px;
  max-width: 400px;
  padding: 5px;
  margin-left: ${props => props.rightAlign ? 'auto' : 'none'};
  text-align: ${props => props.rightAlign ? 'right' : 'initial'};
`;

export default Text;
