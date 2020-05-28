import React from 'react';
import './SharedCom.scss'

class SharedComponent extends React.Component {
	render() {
		return (
			<div className="test-content">
				<h1>My shared component!!</h1>
			</div>
		)
	}
}

export default SharedComponent