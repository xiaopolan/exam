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
		margin-left: 15px;
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
		margin-left: 90px;
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
		margin-left: 20px;
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
	.timu {
		width: 100%;
		/* padding: 10px; */
		box-sizing: border-box;
		text-align: left;
	
	}
	
	.quediv {
		font-weight: bold;
		background-color: #0594F0;
		width: 100%;
		height: auto;
		font-size: 17px;
		min-height: 50px;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 24px;
		padding: 19px 15px;
		box-sizing: border-box;
	}
	.typeclass {
		width: 40px;
		height: 20px;
		display: inline-block;
		background: #ffd200;
		color: #009cff;
		border-radius: 3px;
		line-height: 20px;
		text-align: center;
		margin-right: 4px;
	}
	.bgimg {
		height: 4px;
		width: 100%;
		background: url(../assets/test5.png) no-repeat;
		background-size: 100% 4px;
	}
	.nextone {
		width: 80%;
		max-width: 400px;
		border: none;
		background: #0584EB;
		border-radius: 22px;
		color: #FFFFFF;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		position: fixed;
		bottom: 63px;
		left: 10%;
	}
	.getinput{
		width: 80%;
		min-height: 28px;
		border-radius: 4px;
		margin-top: 30px;
	}
	.imgback{
		width: 30px;
		height: 17px;
	}
	.bottomtext {
		position: fixed;
		bottom: 0;
		margin-top: 10px;
		height: 50px;
		width: 100%;
		text-align: center;
		font-size: 13px;
		font-weight: 400;
		color: #0584EB;
	}
</style>
<template>
    <div class="header">
        <div class="timer">
			<img class="imgback" src="../assets/back.png" @click="backhome"/>
        	<div class="timeimg"></div>
        	<div class="timetext">倒计时 {{timemsg}}</div>
        	<div class="allimg"></div>
        	<div class="alltext"><span class="at1">{{tknumber+1}}</span><span class="at2" >/{{cursize}}</span></div>
        </div>
		<div class="timu">
			<div class="quediv">
				<div><span class="typeclass">填空</span>{{tkquestion.tpfont}}</div>
			</div>
			<div class="bgimg"></div>
		</div>
		<div class="answer">
			<textarea class="getinput" type="text" v-model="answertk" />
		</div>
		<button class="nextone" @click="tonext()" v-if="istijiao">下一题</button>
		<button class="nextone" @click="toindex()" v-if='!istijiao'>提交</button>
		<div class="bottomtext" style="max-width: 500px;">行行云算 cc.hhzj.net </br>
			提醒您要注意答题时间哦~</div>
    </div>
</template>
<script>
export default {
    name: "newheader",
    data(){
        return{
			timemsg:'',
			maxtime:'',
			timer:null,
			getchange:1,
			cursize:0,//总条数
			nowindex:0,//当前条数
			wronnum:0,//错误
			rightnum:0,//正确
			type:'',//1 练习 2 初赛 3 竞速
			istijiao:true,
			answertk:'',
			tknumber:0,
			eid:'',
			tkquestion:{
				
			}
        }
    },
	computed:{
	},
	created() {
		if(localStorage.getItem('tknumber')){
			this.tknumber=parseInt(localStorage.getItem('tknumber'))
		}else{
			this.tknumber=0
		}
		if(localStorage.getItem('maxtime')){
			this.maxtime=parseInt(localStorage.getItem('maxtime'))
		}else{
			this.maxtime=0
		}
		// if(sessionStorage.getItem('tknumber')){
		// 	this.tknumber=sessionStorage.getItem('tknumber')
		// }
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
				localStorage.setItem('maxtime',_that.maxtime)
			} else {
				_that.showhome();
				clearInterval(_that.timer);
			}
		}, 1000)
		this.gettkexc();
	},
    // props: ['headTitle'],
    methods:{
		backhome(){
			this.$router.push({
			  name: 'Home',
			})
		},
		//提交试卷
		showhome(){
			var that=this
			this.axios.get(this.baseurls+'/prelim/comPrelim', {
				headers:{
				    'Authorization':localStorage.getItem('Authorization')
				},
				params:{
					ttype:3,
					eid:localStorage.getItem('eid')
				}
			}).then(res =>{
				var totalScore=res.data.resultData.totalScore
				that.$router.push({
					name: 'result',
					params:{
						rightnum:that.rightnum,
						wronnum:that.wronnum,
						type:that.type,
						totalScore:totalScore
					}
				})
			}).catch(() =>{
			
			})
		},
		//获取试卷id
		gettkexc(){
			var that=this
			this.axios.get(this.baseurls+'/prelim/getQuestion', {
				headers:{
				    'Authorization':localStorage.getItem('Authorization')
				},
				params:{
					ttype:2
				}
			}).then(res =>{
				if(res.data.code==200){
					let reslist=res.data.data;
					for(let i=0;i<reslist.length;i++){
						let date1=new Date();  //开始时间
						let date2=new Date(reslist[i].eovertime);    //结束时间
						let date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
						localStorage.setItem('maxtime',parseInt(date3/1000));
						that.maxtime=parseInt(date3/1000)
						if(reslist[i].ttype==2 && reslist[i].tstate==0){
							that.eid=reslist[i].eid;
							localStorage.setItem('eid',reslist[i].eid);
							that.gettkqu()
						}else if(reslist[i].ttype==2 && reslist[i].tstate==1){
							alert('不在考试时间内，无法答题！')
						}
					}
				}
				
			}).catch(() =>{
			
			})
		},
		//提交答案获取下一题
		tonext(msg){
			if(this.answertk == ''){
				return false
			}
			let url=this.baseurls+'/prelim/postPrelimAnswer'
			let params={
				 	tpid:this.tkquestion.tpid,
				 	aAnswer:this.answertk,
				 	eid:this.eid,
					ttype:3
				 }
			let that=this;
			this.axios.get(url, {
				headers:{
					'Authorization':localStorage.getItem('Authorization')
				},
				params:params
			}).then(res =>{
				that.tknumber=that.tknumber+1,
				localStorage.setItem('tknumber',that.tknumber)
				that.answertk='';
				if(msg!='noti'){
					that.gettkqu()
				}else{
					that.finall()
				}
			}).catch(() =>{
			
			})
		},
		gettkqu(){
			let url=this.baseurls+'/prelim/getStage';
			let	params={
				index:this.tknumber,
				eid:localStorage.getItem('eid'),
				ttype:3
			}
			let that=this;
			this.axios.get(url, {
				headers:{
				    'Authorization':localStorage.getItem('Authorization')
				},
				params:params
			}).then(res =>{
				if (that.tknumber == that.cursize-1) {
					that.istijiao = false
				}
				that.cursize=res.data.resultData.totalSize;
				that.tkquestion=res.data.data
			}).catch(() =>{
			
			})
		},
		finall(){
			var that=this;
			this.axios.get(this.baseurls+'/prelim/comPrelim', {
				headers:{
				    'Authorization':localStorage.getItem('Authorization')
				},
				params:{
					ttype:2,
					eid:localStorage.getItem('eid')
				}
			}).then(res =>{
				var totalScore=res.data.resultData.totalScore
				var falseNum=res.data.resultData.falseNum
				var trueNum=res.data.resultData.trueNum
				var list=res.data.resultData.parmList;
				var cdlist;
				var sclist;
				for(let i=0;i<list.length;i++){
					if(list[i].type==1){
						cdlist=list[i]
					}else if(list[i].type==2){
						sclist=list[i]
					}
				}
				that.$router.push({
					name: 'result',
					params:{
						rightnum:trueNum,
						wronnum:falseNum,
						type:3,
						totalScore:totalScore,
						cdlist:cdlist,
						sclist:sclist
					}
				})
			}).catch(() =>{
			
			})
		},
		toindex(){
			this.tonext('noti');
		}
    },
	beforeDestroy() {
	    clearInterval(this.timer);        
	    this.newtimer = null;
	}
}
</script>