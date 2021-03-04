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

	getAverageRating() {
		let ratingLength = this._ratings.length;
		let ratingTotal = 0;
		let averageRating;
		const sumRating = (total, current) => total + current;

		if(ratingLength === 0) {
			return ratingTotal;
		} else {
			//this._ratings.forEach(value => ratingTotal += value);
			ratingTotal = this._ratings.reduce(sumRating);

			averageRating = (ratingTotal/ratingLength).toFixed(2);
			
			return averageRating;
		}
	}

	toggleCheckoutStatus() {
		this._isCheckedOut = !this._isCheckedOut;
	}

	addRating(newRating) {
		if (newRating >= 1 && newRating <= 5) {
			this._ratings.push(newRating);
		} else {
			console.log(`'${newRating}' is not a valid value. Please specify a value between 1 and 5.`)
		}
	}
}

class Book extends Media {
	constructor(author, title, pages) {
		super(title);
		this._author = author;
		this._pages = pages;
		this._publisher;
	}

	get author() {
		return this._author;
	}

	get pages() {
		return this._pages;
	}

	get publisher() {
		return this._publisher;
	}

	setPublisher(newPublisher) {
		this._publisher = newPublisher;
	}
}

class Movie extends Media {
	constructor(director, title, runTime) {
		super(title);
		this._director = director;
		this._runTime = runTime;
		this._movieCast = [];
	}

	get director() {
		return this._director;
	}

	get runTime() {
		return this._runTime;
	}

	get movieCast() {
		return this._movieCast;
	}

	addCastMember(newCastMember) {
		this._movieCast.push(newCastMember);
	}
}

class CD extends Media {
	constructor (artist, title) {
		super(title);
		this._artist = artist;
		this._songTitles = [];
	}

	get artist() {
		return this._artist;
	}

	get songTitles() {
		return this._songTitles;
	}

	addSong(newSong) {
		this._songTitles.push(newSong);
	}

	shuffle() {
		let numSongs = this._songTitles.length;
		let randNum;
		let randSong;
		let playlist = [];

		//todo: the actual random sort - done!
		do {
			/*
				- Get a random number between 0 and numSongs
				- If this._songTitles[random number] isn't in playlist
					- push this._songTitles[random number] into playlist
				- Lather, rinse, repeat until the playlist is full
			*/

			// This is 100% for readability.
			randNum = Math.floor(Math.random() * numSongs);
			randSong = this._songTitles[randNum];

			if (!playlist.includes(randSong)) {
				playlist.push(randSong)
			}

		} while (playlist.length < numSongs); // use < instead? Try it!

		return playlist;
	}
}

class Catalog {
	constructor(type, name) {
		
	}
}