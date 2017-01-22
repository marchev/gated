'use strict';

import React from 'react';

export default class Header extends React.Component {

	render() {
		return (
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">

            <span className="mdl-layout-title">Плащания</span>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
              </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
              <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
              <li className="mdl-menu__item">Настройки</li>
              <li className="mdl-menu__item">Контакти</li>
            </ul>
          </div>
        </header>
		)
	}
}