class School {
	constructor(name, level, numberOfStudents) {
		this._name = name;
		this._level= level;
		this._numberOfStudents = numberOfStudents;
	}

	get name() {
		return this._name;
	}

	get level() {
		return this._level;
	}

	get numberOfStudents() {
		return this._numberOfStudents;
	}

	setNumberOfStudents(newNumberOfStudents) {
		if (typeof newNumberOfStudents === 'number') {
			this._numberOfStudents = newNumberOfStudents;
		} else {
			console.log('Invalid input: numberOfStudents must be set to a Number.');
		}
	}

	quickFacts() {
		console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`);
	}

	static pickSubstituteTeacher(substituteTeachers) {
		let numSubs = substituteTeachers.length;
		let randIndex;
		let randomSub;
		
		randIndex = Math.floor(Math.random() * (numSubs));
		randomSub = substituteTeachers[randIndex];

		return randomSub;
	}
}

class PrimarySchool extends School {
	constructor(name, numberOfStudents, pickupPolicy) {
		super(name, 'primary', numberOfStudents);
		this._pickupPolicy = pickupPolicy;
	}

	get pickupPolicy() {
		console.log(this._pickupPolicy); 
	}
}

class MiddleSchool extends School {
	constructor (name, numberOfStudents){
		super(name, 'middle', numberOfStudents);
	}
}

class HighSchool extends School {
	constructor(name, numberOfStudents, sportsTeams) {
		super(name, 'high', numberOfStudents);
		this._sportsTeams = sportsTeams;
	}

	get sportsTeams() {
		console.log(this._sportsTeams);
	}
}