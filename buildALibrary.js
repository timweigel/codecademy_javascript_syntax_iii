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

class Book extends Media {
	constructor(author, title, pages) {
		super(title);
		this._author = author;
		this._pages = pages;
	}

	get author() {
		return this._author;
	}

	get pages() {
		return this._pages;
	}
}

class Movie extends Media {
	constructor(director, title, runTime) {
		super(title);
		this._director = director;
		this._runTime = runTime;
	}

	get director() {
		return this._director;
	}

	get runTime() {
		return this._runTime;
	}
}

class CD extends Media {
	constructor (artist, title) {
		super(title);
		this._artist = artist;
	}

	get artist() {
		return this._artist;
	}
}