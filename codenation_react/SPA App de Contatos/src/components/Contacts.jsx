import React from "react";
import '../components/Contacts.css'
import Contact from '../components/Contact'

class Contacts extends React.Component {
	render() {
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
				<Contact data= {{ }} />
				</section>
			</div>
				
		)
	}
}

export default Contacts;
