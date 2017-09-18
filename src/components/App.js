import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import BottomNav from './BottomNav';

import '../assets/stylesheets/base.scss';


const App = ({ children }) => {
  return (
    <div className="content">
      {children}
      <BottomNav>
        <BottomNav.Link
          exact
          to="/"
        >
          <FontAwesome
            name="newspaper-o"
            size="2x"
          />
        </BottomNav.Link>
        <BottomNav.Link
          exact
          to="/sources/"
        >
          <FontAwesome
            name="compass"
            size="2x"
          />
        </BottomNav.Link>
        <BottomNav.Link
          exact
          to="/bookmarks/"
        >
          <FontAwesome
            name="bookmark-o"
            size="2x"
          />
        </BottomNav.Link>
      </BottomNav>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
