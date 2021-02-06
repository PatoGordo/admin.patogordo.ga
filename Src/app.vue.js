const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AddPost },
  { path: '/delete', component: Delete }
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
				<router-link to="/" class="navbar-item"><ion-icon class="nav-icons" name="home-outline"></ion-icon></router-link>
				<router-link to="/about" class="navbar-item"><ion-icon class="nav-icons" name="add-outline"></ion-icon></router-link>
				<router-link to="/delete" class="navbar-item"><ion-icon class="nav-icons" name="trash-outline"></ion-icon></router-link>
			</p>
			<router-view></router-view>
		</div>
	`
}).$mount("#app")