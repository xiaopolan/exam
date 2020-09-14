<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
	export default {
	  name: 'App',
	  created() {
	  	let Authorization=this.$route.query.Authorization
	  	if(Authorization){
	  		localStorage.setItem('Authorization',Authorization);
			this.$router.push({
				name: 'Home',
			})
	  	}
	  },
	  mounted() {
		window.addEventListener('unload', ()=>{
			sessionStorage.setItem('state', JSON.stringify(this.$store.state))
		});
		let that=this
		window.addEventListener("popstate", function(e) { 
			that.$router.push({
				name: 'Home',
			})
		}, false); 
	  },
	  methods: {
		
	  },
	}
</script>
<style>
	body{
		padding: 0;
		margin:0		
	}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* *{
     moz-user-select: -moz-none;
     -moz-user-select: none;
     -o-user-select:none;
     -khtml-user-select:none;
     -webkit-user-select:none;
     -ms-user-select:none;
     user-select:none;
} */
</style>
