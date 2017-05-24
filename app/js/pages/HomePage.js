'use strict';

import PropTypes from 'prop-types';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

const propTypes = {
  currentUser: PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
        <section className="home-page">

          <div>
            Home
          </div>

          <div>
            <Link to="/search">Search</Link>
          </div>

        </section>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
