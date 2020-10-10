<style scoped="scoped">
	.oneimg{
		width: 100%;
		height: 318px;
		background: url(../assets/spimg3.png) no-repeat;
		background-size: 100% 318px;
	}
	.maindiv{
		background-color: #ea714c;
		padding: 15px 0 0 0;
		box-sizing: border-box;
	}
	.btngrop{
		width: 290px;
		height: 49px;
		background: #F8835F;
		border: 3px solid #B84D26;
		border-radius: 7px;
		font-size: 17px;
		font-weight: bold;
		color: #FFFFFF;
		line-height: 49px;
		margin: 20px auto 0;
	}
	.twoimg{
		width: 362px;
		height: 160px;
		background: url(../assets/spimg2.png) no-repeat;
		background-size: 362px 160px;
		margin: 46px auto 0;
	}
	.thrimg{
		width: 100%;
		height: 35px;
		background: url(../assets/spimg1.png) no-repeat;
		background-size: 100% 35px;
	}
</style>
<template>
	<!-- <div>
		<div @click="preview()">查看视频</div>
		<div @click="uploadmv()">上传视频</div>
	</div> -->
	<div class="maindiv">
		<div class="oneimg"></div>
		<div class="divmid">
			<div class="btngrop" @click="uploadmv()">上传视频</div>
			<div class="btngrop" @click="preview()">查看视频</div>
		</div>
		<div class="twoimg"></div>
		<div class="thrimg"></div>
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
	 // localStorage.removeItem('Authorization');
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
