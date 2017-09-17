import styled from 'styled-components';

import Body from './Body';

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

Page.Body = Body;

export default Page;
