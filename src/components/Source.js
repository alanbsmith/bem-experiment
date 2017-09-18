import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Page from './Page';


function Source({ match }) {
  const { name } = match.params;

  return (
    <Page>
      <Header
        alignItems="flex-start"
        justifyContent="flex-end"
        minHeight="200px"
      >
        <Header.Title>
          {name}
        </Header.Title>
      </Header>
      <Page.Body>
        a list of articles by {name}
      </Page.Body>
    </Page>
  );
};

Source.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Source;
