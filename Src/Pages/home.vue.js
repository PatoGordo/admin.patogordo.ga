Vue.component('Home', {
  data: function () {
    return {
			giant: "HOME",
      title: "Welcome to the home page"
    }
  },
  template: `
	<div class="home">
		<h1><strong>{{ giant }}</strong></h1>
		<h1>{{ title }}</h1>
	</div>`
})



const Home = {
	template:`
		<Home />
	`
}