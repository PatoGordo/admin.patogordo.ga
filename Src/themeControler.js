if(localStorage.getItem('admin.patogordo.ga:theme') == null){
	localStorage.setItem('admin.patogordo.ga:theme', 'default')
}else{
	localStorage.getItem('admin.patogordo.ga:theme', 'dark')
}
function getTheme(){
	return localStorage.getItem('admin.patogordo.ga:theme')
}