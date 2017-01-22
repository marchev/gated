'use strict';

import React from 'react';
import Header from './layout/Header'
import AppDrawer from './layout/AppDrawer'

export default class Layout extends React.Component {

	render() {
		return (
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
            <Header />
            <AppDrawer />
            <main className="mdl-layout__content">
              <div className="page-content">
                &nbsp;
              </div>
            </main>
          </div>
		)
	}
}