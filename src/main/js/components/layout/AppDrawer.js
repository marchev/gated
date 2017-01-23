'use strict';

import React from 'react';

export default class AppDrawer extends React.Component {
    render() {
        return (
            <div className="mdl-layout__drawer">
              <span className="mdl-layout-title display-1">gated</span>
              <nav className="mdl-navigation">
                <a className="mdl-navigation__link" href="">Плащания</a>
                <a className="mdl-navigation__link" href="">Апартменти</a>
              </nav>
            </div>
        )
    }
}


