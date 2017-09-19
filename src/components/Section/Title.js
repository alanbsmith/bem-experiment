import styled from 'styled-components';

const Title = styled.div`
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 600;
  color: #263238;
  max-width: 400px;
  padding: 5px;
  margin-left: ${props => props.rightAlign ? 'auto' : 'none'};
  text-align: ${props => props.rightAlign ? 'right' : 'initial'};
`;

export default Title;
