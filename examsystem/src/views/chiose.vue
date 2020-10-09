<style scoped="scoped">
</style>
<template>
	<div>
		<div @click="preview()">查看视频</div>
		<div @click="uploadmv()">上传视频</div>
	</div>
</template>

<script>

export default {
  name: 'result',
  components: {
	  
  },
  data(){
	  return{
	  }
  },
  created() {
	 
  },
  methods:{
	preview(){
		this.$router.push({
			name: 'previewpage',
		})
	},
	uploadmv(){
		this.$router.push({
			name: 'uploadpage',
		})
	}
  }
}
</script>
