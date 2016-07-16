import React from 'react';
import {observer} from 'mobx-react';


@observer
export default class Guest extends React.Component {
	render() {
		const {guest} = this.props
		return (
      <div>{guest.guest}</div>
		)
	}
}
