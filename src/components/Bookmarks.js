import React from 'react';

import Header from './Header';
import Page from './Page';
import Body from './Body';


function Bookmarks() {
  return (
    <Page>
      <Header
        alignItems="flex-start"
        justifyContent="flex-end"
        minHeight="200px"
      >
        <Header.Content
          alignItems="flex-start"
          justifyContent="flex-end"
        >
          <Header.Title>
            Bookmarks
          </Header.Title>
        </Header.Content>
      </Header>
      <Body>
        a list of bookmarked articles
      </Body>
    </Page>
  );
};

export default Bookmarks;
