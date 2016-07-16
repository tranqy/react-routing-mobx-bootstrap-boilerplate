import {observable, computed} from 'mobx'
import GuestModel from '../models/GuestModel'


export default class GuestStore {
	@observable guests = [];

	@computed get guestCount() {
		return this.guests.length;
	}

	addGuest (guest) {
		this.guests.push(new GuestModel(this, guest));
	}

	toJS() {
		return this.guests.map(guest => guest.toJS());
	}

	static fromJS(array) {
		const store = new GuestStore();
		store.guests = array.map(item => GuestModel.fromJS(guestStore, item));
		return store;
	}
}
