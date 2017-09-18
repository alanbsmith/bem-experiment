import styled from 'styled-components';

import newslyIcon from '../../assets/images/newsly-icon.svg';

const Icon = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url(${newslyIcon});
  height: 150px;
  width: 150px;
  margin: 5px;
  transition: all 0.2s ease;
  @media (max-width: 500px) {
    height: 100px;
    width: 100px;
  }
`;

export default Icon;
