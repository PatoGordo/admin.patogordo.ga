Vue.component('About', {
  data: function () {
    return {
			giant: "ABOUT",
      title: "Welcome to the about page"
    }		
  },
	methods:{
		
	},
  template: `
	<div class="about">
		<h1><strong>{{ giant }}</strong></h1>
		<h1>{{ title }}</h1>
	</div>
	`
})

const About = {
	template:`
		<About />
	`
}