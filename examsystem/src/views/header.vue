<style scoped="scoped">
	.timer{
		display: flex;
		flex-direction: row;
		height: 45px;
		width: 100%;
		align-items: center;
	}
	.timeimg{
		width: 13px;
		height: 12px;
		background: url(../assets/test4.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 10px;
	}
	.timetext{
		font-size: 14px;
		font-weight: 400;
		color: #FF6464;
		margin-left: 6px;
	}
	.rightimg{
		width: 13px;
		height: 12px;
		background: url(../assets/test1.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 70px;
	}
	.wronimg{
		width: 13px;
		height: 12px;
		background: url(../assets/test3.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 10px;
	}
	.allimg{
		width: 13px;
		height: 12px;
		background: url(../assets/test2.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 15px;
	}
	.righttext{
		font-size: 14px;
		font-weight: 400;
		color: #0594F0;
		margin-left: 6px;
	}
	.wrontext{
		font-size: 14px;
		font-weight: 400;
		color: #FF5D64;
		margin-left: 6px;
	}
	.at1{
		font-size: 14px;
		font-weight: bold;
		color: #222222;
	}
	.at2{
		font-size: 14px;
		font-weight: bold;
		color: #AAAAAA;
	}
	.alltext{
		margin-left: 6px;
	}
	.master{
		width: 100%;
		height: 100vh;
		background: rgb(0,0,0,0.6);
		position: absolute;
		top: 0;
		left:0;
		z-index: 999;
	}
	.mastdiv{
		width: 50%;
		height: 60px;
		line-height: 60px;
		background: #FFFFFF;
		border-radius: 5px;
		position: absolute;
		top: 200px;
		left:20%;
		z-index: 1000;
		padding: 16px 20px;
	}
	.imgback{
		width: 30px;
		height: 17px;
	}
</style>
<template>
    <div class="header">
        <div class="timer">
			<img class="imgback" src="../assets/back.png" @click="backhome"/>
        	<div class="timeimg"></div>
        	<div class="timetext">倒计时 {{timemsg}}</div>
        	<div class="rightimg"></div>
        	<div class="righttext">{{rightnum}}</div>
        	<div class="wronimg"></div>
        	<div class="wrontext">{{wronnum}}</div>
        	<div class="allimg"></div>
        	<div class="alltext"><span class="at1">{{nowindex}}</span><span class="at2" >/{{cursize}}</span></div>
        </div>
		<div class="master" v-if='ismaster'></div>
		<div class="mastdiv" v-if='ismaster'>剩余{{second}}s后开启实操答题</div>
		<about v-if="getchange==1" :getchange='getchange' :type='type' @getFun="showMsg"  @getsize="showsize" @getnow="shownow" @getright="showright" @getwron="showwron" @gethome='showhome'></about>
		<aboutco v-if="getchange==2" :getchange='getchange' :type='type' @getFun="showMsg" @getsize="showsize" @getnow="shownow" @getright="showright" @getwron="showwron" @gethome='showhome'></aboutco>
	</div>
</template>
<script>
import about from './About.vue'
import aboutco from './Aboutco.vue'
export default {
    name: "app-header",
	components: {
	  about,
	  aboutco
	},
    data(){
        return{
			timemsg:'',
			// maxtime:30 * 60,
			timer:null,
			getchange:1,
			cursize:0,//总条数
			nowindex:0,//当前条数
			wronnum:0,//错误
			rightnum:0,//正确
			type:'',//1 练习 2 初赛 3 竞速
			maxtime:null,
			ismaster:false,
        }
    },
	computed:{
		// maxtime: {
		// 	get(){
		// 		return this.$store.state.maxtime
		// 	},
		// 	set(val){
		// 		this.$store.state.maxtime=val
		// 	}
		// },
	},
	created() {
		this.type=sessionStorage.getItem('type');
		if(this.type==3){
			// if(sessionStorage.getItem('maxtime')){
			// 	this.maxtime=sessionStorage.getItem('maxtime')
			// }else{
			// 	this.maxtime=5*60
			// }
			if(localStorage.getItem('maxtime')){
				this.maxtime=localStorage.getItem('maxtime')
			}else{
				this.maxtime=5*60
			}
			if(localStorage.getItem('cursize')){
				this.cursize=localStorage.getItem('cursize')
			}else{
				this.cursize=0
			}
		}else if(this.type==2){
			if(sessionStorage.getItem('maxtime')){
				this.maxtime=sessionStorage.getItem('maxtime')
			}else{
				this.maxtime=30*60
			}
		}else{
			if(sessionStorage.getItem('maxtime')){
				this.maxtime=sessionStorage.getItem('maxtime')
			}else{
				this.maxtime=60*60
			}
		}
		if(this.type==3){
			if(localStorage.getItem('rightnum')){
				this.rightnum=parseInt(localStorage.getItem('rightnum'));
			}else{
				this.rightnum=0
			}
			if(localStorage.getItem('wronnum')){
				this.wronnum=parseInt(localStorage.getItem('wronnum'));
			}else{
				this.wronnum=0
			}
		}else{
			if(sessionStorage.getItem('rightnum')){
				this.rightnum=parseInt(sessionStorage.getItem('rightnum'));
			}else{
				this.rightnum=0
			}
			if(sessionStorage.getItem('wronnum')){
				this.wronnum=parseInt(sessionStorage.getItem('wronnum'));
			}else{
				this.wronnum=0
			}
		}
		
		var _that=this;
		let minutes = Math.floor(this.maxtime / 60);
		let seconds = Math.floor(this.maxtime % 60);
		this.timemsg = minutes + ":" + seconds;
		this.timer = window.setInterval(() => {
			if (_that.maxtime >= 0) {
				let minutes = Math.floor(_that.maxtime / 60);
				let seconds = Math.floor(_that.maxtime % 60);
				_that.timemsg = minutes + ":" + seconds;
				--_that.maxtime;
				if(_that.type==3){
					localStorage.setItem('maxtime',_that.maxtime);
				}else{
					sessionStorage.setItem('maxtime',_that.maxtime);
				}
			} else {
				_that.showhome();
				clearInterval(_that.timer);
			}
		}, 1000)
	},
    // props: ['headTitle'],
    methods:{
		backhome(){
			this.$router.push({
			  name: 'Home',
			})
		},
		showMsg(title){
			this.getchange=title
		},
		showsize(title){
			this.cursize=title
		},
		shownow(title){
			this.nowindex=title
		},
		showwron(title){
			this.wronnum++;
			if(this.type==3){
				localStorage.setItem('wronnum',this.wronnum)
			}else{
				sessionStorage.setItem('wronnum',this.wronnum)
			}
			
		},
		showright(){
			this.rightnum++;
			if(this.type==3){
				localStorage.setItem('rightnum',this.rightnum)
			}else{
				sessionStorage.setItem('rightnum',this.rightnum)
			}
		},
		showhome(){
			if(this.type==1){
				var that=this
				this.axios.get(this.baseurls+'/exercise/commit', {
					headers:{
					    'Authorization':localStorage.getItem('Authorization')
					},
				}).then(res =>{
					that.$router.push({
						name: 'result',
						params:{
							rightnum:that.rightnum,
							wronnum:that.wronnum,
							type:that.type,
							numnow:res.data.resultData.nums
						}
					})
				}).catch(() =>{
				
				})
			}
			if(this.type==2){
				var that=this
				this.axios.get(this.baseurls+'/prelim/comPrelim', {
					headers:{
					    'Authorization':localStorage.getItem('Authorization')
					},
					params:{
						ttype:0,
						eid:sessionStorage.getItem('eid')
					}
				}).then(res =>{
					if(res.data.code == '404' || res.data.code == '406'){
						alert('答题异常，即将返回首页!');
						that.$router.push({
						  name: 'Home',
						})
					}else{
						var totalScore=res.data.resultData.totalScore
						that.$router.push({
							name: 'result',
							params:{
								rightnum:res.data.resultData.trueNum,
								wronnum:res.data.resultData.falseNum,
								type:that.type,
								totalScore:totalScore
							}
						})
					}
					
				}).catch(() =>{
				
				})
			}
			if(this.type==3){
				var that=this
				this.axios.get(this.baseurls+'/prelim/comPrelim', {
					headers:{
					    'Authorization':localStorage.getItem('Authorization')
					},
					params:{
						ttype:1,
						eid:localStorage.getItem('eid')
					}
				}).then(res =>{
					if(res.data.code == '404' || res.data.code == '406'){
						alert('答题异常，即将返回首页!');
						that.$router.push({
						  name: 'Home',
						})
					}else{
						if(res.data.resultData.isjump){
							localStorage.removeItem('maxtime');
							localStorage.removeItem('wronnum');
							localStorage.removeItem('rightnum');
							localStorage.removeItem('xuhaonum');
							localStorage.removeItem('eid');
							that.$router.push({
								name: 'newheader',
							})
						}else{
							//todo
							that.ismaster=true;
							that.maxtime=parseInt(res.data.resultData.second)+1;
							that.second=res.data.resultData.second;
							var _that=that
							var timerouts = window.setInterval(() => {
								_that.second--;
								if(_that.second==0){
									localStorage.removeItem('maxtime');
									localStorage.removeItem('wronnum');
									localStorage.removeItem('rightnum');
									localStorage.removeItem('xuhaonum');
									localStorage.removeItem('eid');
									_that.$router.push({
										name: 'newheader',
									})
								}
							}, 1000)
						}
					}
					
				}).catch(() =>{
				
				})
			}
		}
    },
	beforeDestroy() {
	    clearInterval(this.timer);        
	    this.newtimer = null;
	}
}
</script>