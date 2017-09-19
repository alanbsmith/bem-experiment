import styled from 'styled-components';

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 5px;
  text-decoration: none;
  max-width: 400px;
  @media(max-width: 500px) {
    max-width: 300px;
  }
`;

export default Title;
