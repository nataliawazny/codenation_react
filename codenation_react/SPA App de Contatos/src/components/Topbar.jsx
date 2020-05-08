import React from 'react';
import '../components/Topbar.css'


class Topbar extends React.Component {
	render() {
		return (
			<header className="topbar"  data-testid="topbar">
          		<div className="container">
            		<a href="/" className="topbar__logo">
              		
            		</a>
          		</div>
        	</header>
		);
	}
}

export default Topbar;
