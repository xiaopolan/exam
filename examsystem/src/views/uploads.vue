<style scoped="scoped">
	.bgone{
		width: 100%;
		height: 414px;
		background: url(../assets/today2.png) no-repeat;
		background-size: 100% 414px;
	}
</style>
<template>
	<div>
		<div class="bgone">
			
		</div>
	</div>
</template>

<script>

export default {
  name: 'uploads',
  components: {
	  
  },
  data(){
	  return{
		  datalist:{}
	  }
  },
  created() {
	  this.getuserinfo()
  },
  methods:{
	  getuserinfo(){
		  this.axios.get(this.baseurls+'/apply/getApplyManageList', {
		  	headers:{
		  	    'Authorization':localStorage.getItem('Authorization')
		  	}
		  }).then(res =>{
		  	if(res.data.data.code>0){
				this.datalist=res.data.data
			}else{
				alert('对不起，您没有上传视频的权限')
				this.$router.push({
					name: 'uploadpage',
				})
			}
		  }).catch(() =>{
		  
		  })
	  }
  }
}
</script>
