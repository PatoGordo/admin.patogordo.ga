// Please don't steal my credentials !!! Unfortunately it is impossible to use variables and environment in Js vanilla 😞😥

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAGgrAm4K626ssrKaiHBdP5Il1H1rPH6Po",
	authDomain: "patogordo-ga.firebaseapp.com",
	databaseURL: "https://patogordo-ga-default-rtdb.firebaseio.com",
	projectId: "patogordo-ga",
	storageBucket: "patogordo-ga.appspot.com",
	messagingSenderId: "389441013936",
	appId: "1:389441013936:web:18ac11dfd868ac2f9fd375"
})
let db = firebaseApp.firestore()
let contactRef = db.collection("contacts")