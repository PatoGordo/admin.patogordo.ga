const routes = [
  { path: '/', component: Home }
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
			<router-view></router-view>
		</div>
	`
}).$mount("#app")