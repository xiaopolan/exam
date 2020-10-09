<style scoped="scoped">
	.bgone{
		width: 100%;
		height: 414px;
		background: url(../assets/today2.png) no-repeat;
		background-size: 100% 414px;
	}
	.mainbody{
		background-color: #2346E0;
	}
	.bgtwo{
		width: 350px;
		height: 58px;
		background: url(../assets/today4.png) no-repeat;
		background-size: 350px 58px;
		margin: 0 auto;
	}
	.bgbodys{
		background: #FFFFFF;
		width: 350px;
		height: 410px;
		margin:20px auto 0
	}
	.sptext{
		width: 320px;
		height: 48px;
		background: #FFFFFF;
		border: 2px solid #EAEAEA;
		margin-top: 25px;
		font-size: 15px;
		font-weight: 400;
		line-height: 48px;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.bgbody2{
		width: 350px;
		height: 237px;
		background: #FFFFFF;
		box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.19);
		border-radius: 10px;
		margin:0 auto
	}
	.bgthr{
		width: 350px;
		height: 58px;
		background: url(../assets/today3.png) no-repeat;
		background-size: 350px 58px;
		margin: 20px auto 0;
	}
	.submitbtn{
		width: 90%;
		height: 59px;
		background: #FFFFFF;
		box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.19);
		border-radius: 7px;
		line-height: 59px;
		margin: 31px auto 0;
		font-size: 20px;
		font-weight: 500;
		color: #3475FE;
	}
	.bgimgbtm{
		width: 100%;
		height: 92px;
		background: url(../assets/today1.png) no-repeat;
		background-size: 100% 92px;
		margin-top: 21px;
	}
	.info{
		font-size: 16px;
		font-weight: 400;
		color: #333333;
		line-height: 37px;
		text-align: left;
		margin-left: 25px;
	}
	.spvideo{
		width: 320px;
		height: 260px;
		background: url(../assets/viewnone.png) no-repeat;
		background-size: 320px 260px;
		margin:0 auto
	}
	.uploadImg{
		width: 320px;
		height: 260px;
		  position: relative;
		  margin: 0;
	}
	.uploadImg input{
		width: 320px;
		height: 260px;
		z-index: 1;
		opacity: 0;
		cursor: pointer;
	}
	.videodiv{
		width: 320px;
		height: 260px;
		line-height: 50px;
	}
	.master{
		width: 100%;
		height: 100%;
		background: rgb(0,0,0,0.6);
		position: absolute;
		top: 0;
		left:0;
		z-index: 999;
		
	}
	.mastdiv{
		width: 60%;
		height: 100px;
		/* line-height: 100px; */
		border-radius: 10px;
		margin: 885px auto 0;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.gifim{
		width: 18px;
		height: 18px;
		margin-left: 10px;
	}
</style>
<template>
	<div class="mainbody">
		<div class="bgone"></div>
		<div class="bgbody2">
			<div class="bgthr"></div>
			<div class="info" style="margin-top: 30px;">姓名：{{datalist.name}}</div>
			<div class="info">手机号：{{datalist.phone}}</div>
			<div class="info">单位名：{{datalist.company}}</div>
		</div>
		<div class="bgbodys">
			<div class="bgtwo"></div>
			<input v-model="font" class="sptext" type="text" placeholder="请填写视频名称" />
			<!-- <video class="videodiv" v-if="isvideo" :src="url"  controls="controls" id="aa" oncanplaythrough="myFunction(this)"></video> -->
			<div v-if="!isvideo" class="spvideo">
				<p class="uploadImg">
					<input type="file" accept="video/*" @change="picUpload($event)" />
				</p>
			</div>
			<div class="videodiv" v-if="isvideo">当前已选择了一个视频</div>
		</div>
		<div class="submitbtn" @click="submitbtn()">提交</div>
		<div class="bgimgbtm"></div>
		<div class="master" v-show="ismast">
			<div class="mastdiv">
				<div>正在上传，请稍后</div>
				<div><img class="gifim" src="../assets/dt.gif" /></div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'uploads',
		components: {

		},
		data() {
			return {
				datalist: {},
				videofile: '',
				font: '',
				url:'',
				isvideo:false,
				ismast:false
			}
		},
		created() {
			this.getuserinfo()
		},
		methods: {
			getuserinfo() {
				this.axios.get(this.baseurls + '/apply/getApplyManageList', {
					headers: {
						'Authorization': localStorage.getItem('Authorization')
					}
				}).then(res => {
					if(res.data.code==200){
						if (res.data.data.code > 0) {
							this.datalist = res.data.data
						} else {
							this.$router.push({
								name: 'choise',
							})
						}
					}else{
						this.$router.push({
							name: 'choise',
						})
						localStorage.removeItem('Authorization');
					}
					
				}).catch(() => {

				})
			},
			picUpload(e) {
				var content = e.target.files[0];
				let reader = new FileReader()
				reader.readAsDataURL(content)
				reader.onload=()=>{
				  this.url = reader.result
				}
				this.isvideo=true
				var url = URL.createObjectURL(content);//获取录音时长
				var audioElement = new Audio(url);//audio也可获取视频的时长
				if(content.size /1024 < 1024 * 400){
					this.videofile = e.target.files[0];
				}else{
					alert('请选择小于400M的视频')
				}
				// var duration;
				// var that=this
				// audioElement.addEventListener("loadedmetadata", function (_event) {
				// 	duration = audioElement.duration;
				// 	if(duration<300){
				// 		that.videofile = e.target.files[0];
				// 	}
					
				// });
				
			},
			submitbtn() {
				if(this.font == ''){
					alert('请输入视频名称');
				}else{
					this.ismast=true
					let formData = new FormData();
					formData.append("file", this.videofile)
					formData.append("font", this.font);
					let config = {
						headers: {
							'Content-Type': 'multipart/form-data',
							'Authorization': localStorage.getItem('Authorization')
						}
					};
					this.axios.post(this.baseurls + '/apply/uplodVideo',formData,config).then(res => {
						if(res.data.code==200){
							this.$router.push({
								name: 'previewpage',
							})
							this.ismast=false
						}else{
							alert('上传失败')
						}
						
					}).catch(() => {
					
					})
				}
				
			}
		}
	}
</script>
