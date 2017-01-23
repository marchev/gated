'use strict';

import React from 'react';
import Header from './layout/Header'
import AppDrawer from './layout/AppDrawer'
import ContentPane from './layout/ContentPane'

export default class Layout extends React.Component {

	render() {
		return (
          <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
            <Header />
            <AppDrawer />
            <ContentPane />
          </div>
		)
	}
}