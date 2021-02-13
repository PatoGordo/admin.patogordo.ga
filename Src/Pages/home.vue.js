Vue.component('Home', {
  data: function () {
    return {
			contacts: [],
			selected: '',
			loginEmail: '',
			loginPassword: '',
			showLoginForm: true,
			message: 'Sign in to see the contacts and delete them.',
			messageClass: 'warn',
    }
  },
	methods: {
		scrollToTop(){
			document.body.scrollTop = 0
  		document.documentElement.scrollTop = 0
		},

		returnMessageToNormal(time){
			setTimeout(() => {
				this.message = 'Sign in to see the contacts and delete them.'
				this.messageClass = 'warn'
			}, time)
		},

		updateContacts(){
			const items = []
			contactRef.get()
			.then(res => {
				res.forEach(function(doc) {
					items.push({ item : doc.data() })
				})
				this.contacts = items
			})
			.catch((err) => {
				this.message = `Error on get data! Error: ${err}`
				this.messageClass = 'error'
				this.scrollToTop()
				this.returnMessageToNormal()
			})
		},
		
		loginAndShowContacts(){
			firebase.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
			.then((user) => {
				this.showLoginForm = false
				this.message = 'Successfully logged in!'
				this.messageClass = 'success'
				this.updateContacts()
				this.scrollToTop()
				setTimeout(() => {
					this.message = 'Click Log out to exit the system.' 
					this.messageClass = 'warn'
				}, 2000)
			})
			.catch((error) => {
				this.showLoginForm = true
				this.message = `Error! Message: ${error.message}`
				this.messageClass = 'error'
				this.scrollToTop()
				this.returnMessageToNormal(3000)
			})
		},
		
		deleteData(){
			contactRef.doc(this.selected).delete()
			.then(() => {
				this.selected = ''
				this.message = 'Deleted Successfully'
				this.messageClass = 'success'
				this.updateContacts()
				this.scrollToTop()
				this.returnMessageToNormal(2000)
			})
			.catch((err) => {
				this.message = `Error! Message: ${err}`
				this.messageClass = 'error'
				this.scrollToTop()
				this.returnMessageToNormal(3000)
			})
		},

		logOut(){
			firebase.auth().signOut().then(() => {
				this.message = 'LogOut Successfully'
				this.messageClass = 'success'
				this.showLoginForm = true
				this.contacts = []
				this.scrollToTop()
				this.returnMessageToNormal(2000)
			}).catch((error) => {
				this.message = 'Error on LogOut'
				this.messageClass = 'error'
				this.scrollToTop()
				this.returnMessageToNormal(2000)
			})
		}
	},
  template: `
	<div class="div-component home">
		<p class="return-message":class="messageClass">{{message}}</p>
		<form class="form" @submit.prevent="loginAndShowContacts()" @keyup.enter="loginAndShowContacts()" :style="showLoginForm ? 'display: block' : 'display: none'">
			<h2 style="margin-bottom: 20px;">Log in</h2>
			<label class="input-label">
				<ion-icon name="person-outline" style="margin-right: 5px;"></ion-icon>
				<input class="input-box" type="email" placeholder="Auth email" v-model="loginEmail">
			</label>
			<label class="input-label">
				<ion-icon name="lock-closed-outline" style="margin-right: 5px;"></ion-icon>
				<input class="input-box" type="password" placeholder="Auth password" v-model="loginPassword">
			</label>
			<button type="submit" class="form-submit">Sign in</button>
		</form>

		<div class="contentBeforeLogin" :style="showLoginForm ? 'display: none' : 'display: block'">
			<div class="header">
				<h1>Welcome to control page!</h1>
				<button @click="logOut()" class="logout-button">Log out</button>
			</div>

			<div class="contact-items" v-if="contacts && contacts.length">
				<div class="contact-item" :key="contact.key" v-for="contact in contacts">
					<h2 class="contact-name">{{contact.item.name}} {{contact.item.id}}</h2>
					<p class="contact-message">{{contact.item.message}}</p>
					<a class="contact-reply" :href="'mailto:' + contact.item.email + '?subject=My return&body=My message...'"><ion-icon class="reply-icon" name="mail-open-outline"></ion-icon> Reply {{contact.item.name}}</a>
				</div>
			</div>

			<form @submit.prevent="deleteData()" class="form">
				<h2 style="margin: 0 15px;/">Delete Items</h2>
				<select v-if="contacts && contacts.length" v-model="selected" class="input-box-select">
					<option v-for="contact in contacts">{{contact.item.email}} {{contact.item.id}}</option>
				</select>
				<button type="submit" class="form-submit">Delete</button>
			</form>
		</div>
	</div>`
})



const Home = {
	template:`
		<Home />
	`
}