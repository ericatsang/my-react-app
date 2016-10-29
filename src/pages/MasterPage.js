import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';

import Header from './Header.js';

export default class is extends React.Component {
  render() {
    return (
      <DocumentTitle title='My budbudbee App'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}
