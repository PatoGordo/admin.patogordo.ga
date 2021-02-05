const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
	router,
	el: "#app",
	data: {

	},
	template: `
		<div id="app">
			<p class="navbar">
				<router-link to="/" class="navbar-item title">Vue Router 🚀</router-link>
				<router-link to="/" class="navbar-item">Home</router-link>
				<router-link to="/about" class="navbar-item">About</router-link>
			</p>
			<router-view></router-view>
		</div>
	`
}).$mount("#app")