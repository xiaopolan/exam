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
	.getbg{
		background-color: #333333cf;
		width: 100%;
		height: 100%;
		padding-top: 245px;
		box-sizing: border-box;
		position: absolute;
		top: 0;
	}
	.formdiv{
		background-color: #FFFFFF;
		width: 80%;
		margin: 0 auto;
		padding: 20px 35px;
		box-sizing: border-box;
		border-radius: 10px;
		position: relative;
	}
	.sfinout{
		width: 90%;
		height: 35px;
		line-height: 35px;
		background: #FFFFFF;
		border: 1px solid #C4C4C4;
		border-radius: 3px;
		margin-top: 10px;
		padding: 0 10px;
	}
	.yzbtn{
		width: 100%;
		height: 35px;
		line-height: 35px;
		background: #ccc;
		border-radius: 4px;
		margin-top: 10px;
	}
	.closebtn{
		position: absolute;
		top: 245px;
		right: 50px;
		font-size: 27px;
		z-index: 999;
		opacity: 0.5;
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
		<div class="getbg" v-show="isgetbg">
			<div class="closebtn" @click="closeText()">×</div>
			<div class="formdiv">
				<input v-model="sfnumber" class="sfinout" type="password"  placeholder="请输入密码"/>
				<div class="yzbtn" @click="yzclick()">点击验证</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'result',
  components: {
	  
  },
  data(){
	  return{
		  sfnumber:'',
		  isgetbg:false
	  }
  },
  created() {
	 // localStorage.removeItem('Authorization');
  },
  methods:{
	preview(){
		this.isgetbg=true;
		
	},
	uploadmv(){
		this.$router.push({
			name: 'uploadpage',
		})
	},
	yzclick(){
		let params={
		   pwd:this.sfnumber,
		}
		this.axios.get(this.baseurls + '/apply/videoList?pwd='+this.sfnumber,).then(res => {
			if(res.data.code==200){
				if(res.data.resultData.code==1){
					this.$router.push({
						name: 'previewpage',
						params:{
							pwd:this.sfnumber,
						}
					})
				}else{
					alert(res.data.data)
				}
			}else{
				alert(res.data.message)
			}
		}).catch(() => {
		
		})
	},
	closeText(){
		this.isgetbg=false;
	}
  }
}
</script>
