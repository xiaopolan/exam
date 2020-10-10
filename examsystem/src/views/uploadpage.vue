<style scoped="scoped">
	.getbg{
		background-color: #333333cf;
		width: 100%;
		height: 100vh;
		padding-top: 170px;
		box-sizing: border-box;
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
	.yzmdiv{
		width: 98px;
		height: 28px;
		line-height: 28px;
		background: #3476FD;
		border: 1px solid #C4C4C4;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 400;
		color: #FFFFFF;
		position: absolute;
		top: 128px;
		right: 38px;
	}
	.yzmdivbg{
		width: 98px;
		height: 28px;
		line-height: 28px;
		background: #CCCCCC;
		border: 1px solid #C4C4C4;
		border-radius: 4px;
		font-size: 14px;
		font-weight: 400;
		color: #FFFFFF;
		position: absolute;
		top: 128px;
		right: 38px;
	}
</style>
<template>
	<div class="getbg">
		<div class="formdiv">
			<input v-model="sfnumber" class="sfinout" type="number" oninput="if(value.length>6)value=value.slice(0,6)" maxlength="6" placeholder="请输入您的身份证号后六位"/>
			<input v-model="phonenum" class="sfinout" type="number" oninput="if(value.length>11)value=value.slice(0,11)" maxlength="6" placeholder="请输入您的手机号"/>
			<input v-model="yzmnum" class="sfinout" type="number" oninput="if(value.length>6)value=value.slice(0,6)" maxlength="6" placeholder="请输入验证码"/>
			<div v-show="issend" class="yzmdiv" @click="getyzm()">获取验证码</div>
			<div v-show="!issend" class="yzmdivbg" >{{getnum}}s后重新发送</div>
			<div class="yzbtn" @click="yzclick()">点击验证</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'uploadpage',
  components: {
	  
  },
  data(){
	  return{
		  sfnumber:'',
		  phonenum:'',
		  yzmnum:'',
		  issend:true,
		  getnum:60
	  }
  },
  created() {
	 if(localStorage.getItem('Authorization')){
		 this.$router.push({
		 	name: 'uploads',
		 })
	 }
  },
  methods:{
	  getyzm(){
		  let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		  if(this.phonenum=='' || this.sfnumber==''){
			alert('请将信息填写完整')
		  }else if(!myreg.test(this.phonenum)){
			alert('手机号输入格式有误')
		  }else{
			this.issend=false;
			var _that=this;
			let timer = window.setInterval(() => {
				if (_that.getnum >= 1) {
					--_that.getnum;
				} else {
					_that.issend=true;
					_that.getnum=60
					clearInterval(timer);
				}
			}, 1000)
			this.axios.get(this.baseurls+'/apply/getCode', {
				params:{
					phone:this.phonenum
				}
			}).then(res =>{
					
			}).catch(() =>{
			
			})
		  }
		 
	  },
	  yzclick(){
		   let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		   let params={
			   code:this.yzmnum,
			   namecode:this.sfnumber,
			   phone:this.phonenum
		   }
		  if(this.phonenum=='' || this.sfnumber=='' || this.yzmnum==''){
		  	alert('请将信息填写完整')
		  }else if(!myreg.test(this.phonenum)){
		  	alert('手机号输入格式有误')
		  }else{
		  	this.axios.post(this.baseurls+'/apply/signIn', this.$qs.stringify(params)).then(res =>{
		  		if(res.data.code == 200){
					if(res.data.resultData.code==1){
						let Authorization=res.data.resultData.Authorization;
						// let datalist=res.data.resultData.applyBean
						localStorage.setItem('Authorization',Authorization);
						this.$router.push({
							name: 'uploads',
							// params:{
							// 	datalist:datalist,
							// }
						})
					}else if(res.data.resultData.code==0){
						alert('对不起，您没有上传视频的权限')
					}else if(res.data.resultData.code==2){
						alert(res.data.data)
					}
				}else{
					alert(res.data.message)
				}		
		  	}).catch(() =>{
		  	
		  	})
		  }
	  }
  }
}
</script>
