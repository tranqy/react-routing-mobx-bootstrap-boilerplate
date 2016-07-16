import {observable} from 'mobx'

export default class GuestModel {
	store
	@observable guest

	constructor(store, guest) {
		this.store = store
		this.guest = guest
	}

	destroy() {
		this.store.guests.remove(this)
	}

	setGuest(guest) {
		this.guest = guest
	}

}
