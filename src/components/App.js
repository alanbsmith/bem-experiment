import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import BottomNav from './BottomNav';

import '../assets/stylesheets/base.scss';


function App({ children }) {
  return (
    <div className="content">
      {children}
      <BottomNav>
        <BottomNav.Content>
          <BottomNav.Link
            exact
            to="/"
            aria-label="navigate to the Newsly home page"
          >
            <FontAwesome
              name="newspaper-o"
              size="2x"
              aria-hidden="true"
            />
          </BottomNav.Link>
          <BottomNav.Link
            exact
            to="/sources/"
            aria-label="navigate to news sources page"
          >
            <FontAwesome
              name="compass"
              size="2x"
              aria-hidden="true"
            />
          </BottomNav.Link>
          <BottomNav.Link
            exact
            to="/bookmarks/"
            aria-label="navigate to your bookmarks page"
          >
            <FontAwesome
              name="bookmark-o"
              size="2x"
              aria-hidden="true"
            />
          </BottomNav.Link>
        </BottomNav.Content>
      </BottomNav>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
