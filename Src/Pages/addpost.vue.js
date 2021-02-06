Vue.component('AddPost', {
  data: function () {
    return {
			
    }		
  },
	methods:{
		
	},
	mounted(){
    ClassicEditor
		.create( document.querySelector( '#editor' ) )
		.catch( error => {
			console.error( error );
		});
	},
  template: `
	<div class="div-component addpost">
		AddPost
		<div id="editor"></div>
	</div>
	`
})

const AddPost = {
	template:`
		<AddPost />
	`
}