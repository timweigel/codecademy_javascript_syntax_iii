class Media {
	constructor (title) {
		this._title = title;
		this._isCheckedOut = false;
		this._ratings = [];
	}
	
	get title() {
		return this._title;
	}

	get isCheckedOut() {
		return this._isCheckedOut;
	}

	get ratings() {
		return this._ratings;
	}

	averageRating() {
		let ratingLength = this._ratings.length;
		let ratingTotal = 0;
		let averageRating;

		if(ratingLength === 0) {
			return 0;
		} else {
			this._ratings.forEach(value => ratingTotal += value);

			averageRating = (ratingTotal/ratingLength).toFixed(2);
			
			return averageRating;
		}
	}

	toggleCheckoutStatus() {
		this._isCheckedOut = !this._isCheckedOut;
	}

	addRating(newRating) {
		this._ratings.push(newRating);
	}
}