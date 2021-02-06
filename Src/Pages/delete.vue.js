Vue.component('Delete', {
  data: function () {
    return {
			contacts: [],
			selected: '',
			selectedEmail: ''
    }
  },
	methods: {
		
	},
	mounted(){
		// const items = [];
		// contactRef.get()
		// .then(res => {
		// 	res.forEach(function(doc) {
    //     //console.log(/* doc.id,*/ doc.data())
		// 		items.push({ item : doc.data() })
    // 	})
		// 	this.contacts = items
		// })
	},
  template: `
	<div class="div-component delete">
		Delete
	</div>`
})



const Delete = {
	template:`
		<Delete />
	`
}

/*<h1>Contacts</h1>
		{{selectedEmail}}
		<form @submit.prevent="deleteData()">
			<h2>Select the item you want to delete.</h2>
			<select v-if="contacts && contacts.length" v-model="selected" >
				<option :key="contact.key" v-for="contact in contacts">{{contact.item.name}} {{contact.item.id}} </option>
			</select>
			<button type="submit">Delete</button>
		</form>
		*/