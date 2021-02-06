Vue.component('Delete', {
  data: function () {
    return {
			contacts: [],
			selected: ''
    }
  },
	methods: {
		deleteData(){
			contactRef.doc(this.selected).delete()
			.then(() => {
				this.selected = ''
			})
		}
	},
	mounted(){
		const items = [];
		this.contacts = []
		contactRef.get()
		.then(res => {
			res.forEach(function(doc) {
				//console.log(/* doc.id,*/ doc.data())
				items.push({ item : doc.id })
			})
			this.contacts = items
		})
	},
  template: `
	<div class="div-component delete">
		{{selected}}
		<form @submit.prevent="deleteData()" class="form">
			<h2 style="margin: 0 15px 10px 15px;">Delete Items</h2>
			<select v-if="contacts && contacts.length" v-model="selected" class="input-box">
				<option v-for="contact in contacts">{{contact.item}}</option>
			</select>
			<button type="submit" class="form-submit">Delete</button>
		</form>
	</div>`
})



const Delete = {
	template:`
		<Delete />
	`
}