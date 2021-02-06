Vue.component('Exemple', {
  data: function () {
    return {
      count: 0
    }		
  },
	methods:{
		add: function(){
			this.count++
			console.log(this.count)
		}
	},
  template: `
	<div class="div-component Exemple">
		<h1>Welcome to the exemple page</h1>
		<button v-on:click={ add() }>add {{ count }}</button>
	</div>
	`
})

const Exemple = {
	template:`
		<Exemple />
	`
}