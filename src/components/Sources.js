import React from 'react';

import Header from './Header';
import Page from './Page';


function Sources() {
  return (
    <Page>
      <Header
        alignItems="flex-start"
        justifyContent="flex-end"
        minHeight="200px"
      >
        <Header.Title>
          Sources
        </Header.Title>
      </Header>
      <Page.Body>
        a list of sources
      </Page.Body>
    </Page>
  );
};

export default Sources;
