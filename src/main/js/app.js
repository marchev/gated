'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import injectTapEventPlugin from 'react-tap-event-plugin';
import client from './client';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {

	constructor(props) {
		super(props);
		// this.state = {apartments: []};
	}

	componentDidMount() {
//		client({method: 'GET', path: '/api/apartments'}).then(response => {
//			this.setState({apartments: response.entity._embedded.apartments});
//		});
	}

	render() {
		return (
              <Router>
                <div>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buildings">Buildings</Link></li>
                    <li><Link to="/apartments">Apartments</Link></li>
                    <li><Link to="/payments">Payments</Link></li>
                  </ul>

                  <hr/>

                  <Match exactly pattern="/" component={Home} />
                  <Match pattern="/buildings" component={Buildings} />
                  <Match pattern="/apartments" component={Apartments} />
                  <Match pattern="/payments" component={Payments} />
                </div>
              </Router>
		)
	}
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Buildings = () => (
  <div>
    <h2>Buildings</h2>
  </div>
)

const Apartments = () => (
  <div>
    <h2>Apartments</h2>
  </div>
)

const Payments = () => (
  <div>
    <h2>Payments</h2>
  </div>
)

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)