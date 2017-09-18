import React from 'react';

import Header from './Header';
import Page from './Page';


function Bookmarks() {
  return (
    <Page>
      <Header
        alignItems="flex-start"
        justifyContent="flex-end"
        minHeight="200px"
      >
        <Header.Title>
          Bookmarks
        </Header.Title>
      </Header>
      <Page.Body>
        a list of bookmarked articles
      </Page.Body>
    </Page>
  );
};

export default Bookmarks;
