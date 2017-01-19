'use strict';

// tag::vars[]
import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';

// tag::app[]
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {apartments: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/apartments'}).then(response => {
			this.setState({apartments: response.entity._embedded.apartments});
		});
	}

	render() {
		return (
			<ApartmentList apartments={this.state.apartments}/>
		)
	}
}
// end::app[]

// tag::apartment-list[]
class ApartmentList extends React.Component {

	render() {
		var apartments = this.props.apartments.map(apartment =>
			<Apartment key={apartment._links.self.href} apartment={apartment}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Number</th>
						<th>Owner</th>
						<th>Registration Date</th>
						<th>Monthly Rate</th>
					</tr>
					{apartments}
				</tbody>
			</table>
		)
	}
}
// end::apartment-list[]

// tag::apartment[]
class Apartment extends React.Component {

	render() {
		return (
			<tr>
				<td>{this.props.apartment.number}</td>
				<td>{this.props.apartment.owner}</td>
				<td>{this.props.apartment.registrationDate}</td>
				<td>{this.props.apartment.monthlyRate}</td>
			</tr>
		)
	}
}
// end::apartment[]

// tag::render[]
ReactDOM.render(
    <App />,
    document.getElementById('react')
)
// end::render[]