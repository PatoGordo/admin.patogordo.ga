Vue.component('Home', {
  data: function () {
    return {
			contacts: [],
    }
  },
	methods: {

	},
	mounted(){
		const items = [];
		contactRef.get()
		.then(res => {
			res.forEach(function(doc) {
        //console.log(/* doc.id,*/ doc.data())
				items.push({ item : doc.data() })
    	})
			this.contacts = items
		})
	},
  template: `
	<div class="div-component home">
		<h1>Contacts</h1>
		<div class="contact-items" v-if="contacts && contacts.length">
      <div class="contact-item" :key="contact.key" v-for="contact in contacts">
				<h2 class="contact-name">{{contact.item.name}} {{contact.item.id}}</h2>
				<p class="contact-message">{{contact.item.message}}</p>
				<a class="contact-reply" :href="'mailto:' + contact.item.email + '?subject=My return&body=My message...'"><ion-icon class="reply-icon" name="mail-open-outline"></ion-icon> Reply {{contact.item.name}}</a>
			</div>
    </div>
	</div>`
})



const Home = {
	template:`
		<Home />
	`
}