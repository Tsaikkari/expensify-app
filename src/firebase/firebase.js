import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// child_removed
/*database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

//child_changed 
database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});*/
/*database.ref('expenses').on('value', (snapshot) => {
	const expenses = [];
		snapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});
		console.log(expenses);
});*/

/*database.ref('expenses')
	.once('value')
	.then((snapshot) => {
		const expenses = [];
		snapshot.forEach((childSnapshot) => {
			expenses.push({
				id: childSnapshot.key,
				...childSnapshot.val()
			});
		});
		console.log(expenses);
	});*/

// Setup expenses with 3 items (description, note, amount, createdAt)
/*database.ref('expenses').push({
	description: 'Rent',
	note: '',
	amount: 100000,
	createdAt: 23478909283745
});*/

// Firebase creates a new property automatically given it a random value
/*database.ref('notes').push({
	title: 'Course Topics',
	body: 'React Native, Angular, Python'
});*/

//database.ref('notes/-M9XfAsxBY7kwmF1U-xC').remove();

/*const firebaseNotes = {
	notes: {
		asdghklölkh: {
			title: 'First note',
			body: 'This is my note'
		},
		aerahiorägoirh: {
			title: 'Another note',
			body: 'This is my note'
		}
	}
};*/
// setup data sub 
/*database.ref().on('value', (snapshot) => {
	const val = snapshot.val();
	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
	console.log('Error with data fetching', e);
});*/
//database.ref('job/company').set('Google');
// Fetching all data & server notifies when the subscribed data changes
/*const onValueChange = database.ref().on('value', (snapshot) => {
	console.log(snapshot.val());
}, (e) => {
	console.log('Error with data fetching', e);
});

setTimeout(() => {
	database.ref('stressLevel').set(10);
}, 3500);	

setTimeout(() => {
	database.ref().off(onValueChange); // Cancels subscription
}, 7000);

setTimeout(() => {
	database.ref('stressLevel').set(9);
}, 10500);*/

// Fetches all data once  	Fetches the city
/*database.ref()			// database.ref('location/city)	  
.once('value')
.then((snapshot) => {
	const val = snapshot.val();
	console.log(val);
})
.catch((e) => {
	console.log('Error fetching data', e)
});*/

/*database.ref().set({
	name: 'Kirsi Trospe',
	job: {
		title: 'Software developer',
		company: 'Google'
	},
	stressLevel: 6, 
	location: {
		city: 'Berlin',
		country: 'Germany'
	}
}).then(() => {
	console.log('Data is saved');
}).catch((e) => {
	console.log('This failed.', e);
});

database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	location: {
		city: 'Seattle',
		country: 'United States'
	}	
});*/

/*const cityRef = database.ref('location/city');
cityRef.remove()
.then(() => {
	console.log('Remove succeeded.');
}).catch(() => {
	console.log('Remove failed.');
});*/

