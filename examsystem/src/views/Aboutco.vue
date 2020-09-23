<style scoped="scoped">
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

	.answer {
		font-size: 16px;
		width: 100%;
		padding: 0;
		padding-top: 10px;
		height: 390px;
		overflow: scroll;
	}

	li {
		list-style: none;
		padding: 10px;
		box-sizing: border-box;
		margin: 10px auto;
	}

	.classa {
		background-color: red;
		color: #FFFFFF;
	}

	.classb {
		background-color: #ccc;
		color: #FFFFFF;
	}

	.classc {
		background-color: greenyellow;
		color: #FFFFFF;
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
		/* position: fixed;
		bottom: 63px;
		left: 10%; */
	}
	.nextoneco {
		width: 80%;
		max-width: 400px;
		border: none;
		background: #CCCCCC;
		border-radius: 22px;
		color: #FFFFFF;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		/* position: fixed;
		bottom: 63px;
		left: 10%; */
	}
	.bgimg {
		height: 4px;
		width: 100%;
		background: url(../assets/test5.png) no-repeat;
		background-size: 100% 4px;
	}

	.timer {
		display: flex;
		flex-direction: row;
		height: 45px;
		width: 100%;
		align-items: center;
	}

	.timeimg {
		width: 13px;
		height: 12px;
		background: url(../assets/test4.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 5px;
	}

	.timetext {
		font-size: 14px;
		font-weight: 400;
		color: #FF6464;
		margin-left: 6px;
	}

	.rightimg {
		width: 13px;
		height: 12px;
		background: url(../assets/test1.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 75px;
	}

	.wronimg {
		width: 13px;
		height: 12px;
		background: url(../assets/test3.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 10px;
	}

	.allimg {
		width: 13px;
		height: 12px;
		background: url(../assets/test2.png) no-repeat;
		background-size: 13px 12px;
		margin-left: 10px;
	}

	.righttext {
		font-size: 14px;
		font-weight: 400;
		color: #0594F0;
		margin-left: 6px;
	}

	.wrontext {
		font-size: 14px;
		font-weight: 400;
		color: #FF5D64;
		margin-left: 6px;
	}

	.at1 {
		font-size: 14px;
		font-weight: bold;
		color: #222222;
	}

	.at2 {
		font-size: 14px;
		font-weight: bold;
		color: #AAAAAA;
	}

	.alltext {
		margin-left: 6px;
	}

	.oneclass {
		width: 335px;
		min-height: 49px;
		border: 1px solid #E1E1E1;
		border-radius: 7px;
		font-size: 15px;
		font-weight: 400;
		color: #333333;
	}

	.bottomtext {
		/* position: fixed;
		bottom: 0; */
		margin-top: 10px;
		height: 50px;
		width: 100%;
		text-align: center;
		font-size: 13px;
		font-weight: 400;
		color: #0584EB;
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
	.ritext{
		margin:0 auto;
		height: 30px;
		line-height: 30px;
		text-align: center;
		width: 200px;
		border-bottom: 1px solid #E1E1E1;
	}
</style>

<template>
	<div class="about">
		<!-- <div class="timer">
    	<div class="timeimg"></div>
    	<div class="timetext">倒计时 {{timemsg}}</div>
    	<div class="rightimg"></div>
    	<div class="righttext">10</div>
    	<div class="wronimg"></div>
    	<div class="wrontext">3</div>
    	<div class="allimg"></div>
    	<div class="alltext"><span class="at1">13</span><span class="at2">/25</span></div>
    </div> -->
		<!-- <appheader></appheader> -->
		<div class="timu">
			<div class="quediv">
				<div v-if="questionList.type==0"><span class="typeclass">单选</span>{{xuhaonum+1}}.{{questionList.tpfont}}</div>
				<div v-if="questionList.type==1"><span class="typeclass">多选</span>{{xuhaonum+1}}.{{questionList.tpfont}}</div>
				<div v-if="questionList.type==2"><span class="typeclass">判断</span>{{xuhaonum+1}}.{{questionList.tpfont}}</div>
				<div v-if="questionList.type==4"><span class="typeclass">填空</span>{{xuhaonum+1}}.{{questionList.tpfont}}</div>
			</div>
			<div class="bgimg"></div>
			<ul class="answer" v-if="questionList.type==1">
				<li v-bind:class="['oneclass',{classb:arr.includes(index)}]" ref="targets" v-for="(item,index) in answerlist"
				 @click="mutoother(index)" :key='index'>{{item}}</li>
				 <div v-if="showget" class="ritext">正确答案为：{{rightanswers}}</div>
			</ul>
			<ul class="answer" v-else>
				<li v-bind:class="['oneclass',{classb:currentIndex === index}]" ref="targets" v-for="(item,index) in answerlist"
				 @click="toother(index)" :key='index'>{{item}}</li>
				 <div v-if="showget" class="ritext">正确答案为：{{rightanswers}}</div>
			</ul>
		</div>
		<div style="max-width: 500px;">
			<button :class="{'nextone':isbtn,'nextoneco':!isbtn}" @click="tonext()" v-if="(questionList.type==0) && istijiao">下一题</button>
			<button :class="{'nextone':isbtn,'nextoneco':!isbtn}" @click="mutonext()" v-if="(questionList.type==1) && istijiao">下一题</button>
			<button :class="{'nextone':isbtn,'nextoneco':!isbtn}" @click="tonext()" v-if="(questionList.type==2) && istijiao">下一题</button>
			<button class="nextone" @click="toindex(questionList.type)" v-if='!istijiao'>提交</button>
		</div>
		<div class="bottomtext" style="max-width: 500px;">行行云算 cc.hhzj.net </br>
			提醒您要注意答题时间哦~</div>
	</div>
</template>
<script>
	// import appheader from './header.vue'
	export default {
		name: 'About',
		props: ['getchange'],
		// components: {
		//   appheader
		// },
		data() {
			return {
				showget:false,//是否显示正确答案
				rightanswers:'',//正确答案
				// getnums: 0,
				isa: false,
				isc: false,
				istijiao: true,//是否可以提交
				arr: [],//多选题选择答案
				// timemsg: '',
				// timer: '',
				currentIndex: '',//单选选择的答案
				rightAnswer: '',//单选返回的答案
				questionList: {},//问题
				answerlist:[],//多选答案
				cursize:0,
				xuhaonum:0,
				muanswer:'',//多选答案列表
				eid:'',
				// totiankong:'',
				type:'',
				isbtn:false,//判断下一题是否灰色
				muclick:false ,//放重复点击
				aboutnum:1, //当前页面参数
				isdisable:false
			}
		},
		computed: {
			// curnum: {
			// 	get(){
			// 		return this.$store.state.curnum
			// 	},
			// 	set(val){
			// 		if(val==undefined){
			// 			this.$store.state.curnum=0
			// 		}else{
			// 			this.$store.state.curnum=val
			// 		}
			// 	}
			// },
		},
		created() {
			this.type=sessionStorage.getItem('type');
			//this.getaxios(this.getnums);
			if(this.type == 3){
				if(localStorage.getItem('eid')){
					this.eid=localStorage.getItem('eid')
				}
				if(localStorage.getItem('xuhaonum')){
					this.xuhaonum=parseInt(localStorage.getItem('xuhaonum'));
				}else{
					this.xuhaonum=0
				}
			}else{
				if(sessionStorage.getItem('eid')){
					this.eid=sessionStorage.getItem('eid')
				}
				if(sessionStorage.getItem('xuhaonum')){
					this.xuhaonum=parseInt(sessionStorage.getItem('xuhaonum'));
				}else{
					this.xuhaonum=0
				}
			}
			
			this.getpaper();
			if(this.type == 3){
				this.isbtn=true
			}
		},
		methods: {
			toother(index) {
				this.muclick=false
				this.currentIndex = index
				if(this.type != 3){
					this.isbtn = true
				}
			},
			mutoother(i) {
				this.muclick=false
				if (this.arr.includes(i)) {
					//includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
					//filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
					this.arr = this.arr.filter(function(ele) {
						return ele != i;
					});
				} else {
					this.arr.push(i);
				}
				if(this.type != 3){
					if(this.arr.length>0){
						this.isbtn = true
					}else{
						this.isbtn = false
					}
				}
			},
			tonext(getparams) {
				if(this.muclick){
					return false
				}else{
					this.muclick=true
				}
				if(this.isdisable){
					return false
				}
				if(this.type==3){
					if (this.currentIndex === '') {
						let size=this.xuhaonum+1
						if(size<this.cursize){
							this.$emit('getFun', this.aboutnum);
							localStorage.setItem('xuhaonum',this.xuhaonum+1)
						}else{
							alert('最后一题请选择答案后再提交')
						}
						// this.$emit('getFun', this.aboutnum);
						// sessionStorage.setItem('xuhaonum',this.xuhaonum+1)
					}else{
						let aAnswer;
						if(this.currentIndex==0){
							aAnswer='A'
						}
						if(this.currentIndex==1){
							aAnswer='B'
						}
						if(this.currentIndex==2){
							aAnswer='C'
						}
						if(this.currentIndex==3){
							aAnswer='D'
						}
						let url=this.baseurls+'/prelim/postPrelimAnswer'
						let params={
							 	tpid:this.questionList.tpid,
							 	aAnswer:aAnswer,
							 	eid:this.eid,
								ttype:1,
								index:this.xuhaonum
							 }
						let that=this;
						this.axios.get(url, {
							headers:{
								'Authorization':localStorage.getItem('Authorization')
							},
							params:params
						}).then(res =>{
							if(res.data.code=='406'){
								alert('答题异常，即将返回首页！');
								that.$router.push({
								  name: 'Home',
								})
							}else{
								let rianswer=res.data.resultData.answer;
								if (rianswer == 'A') {
									that.rightAnswer = 0
								} else if (rianswer == 'B') {
									that.rightAnswer = 1
								} else if (rianswer == 'C') {
									that.rightAnswer = 2
								} else if (rianswer == 'D') {
									that.rightAnswer = 3
								} else {
									that.rightAnswer = ''
								}
								if (that.currentIndex == that.rightAnswer) {
									that.$emit('getright')
								} else {
									that.$emit('getwron')
								}
								let numxh=parseInt(localStorage.getItem('xuhaonum'))+1
								if(res.data.resultData.timeout || numxh==100){
									that.$emit('gethome')
								}else{
									that.$emit('getFun', that.aboutnum);
									localStorage.setItem('xuhaonum',that.xuhaonum+1)
								}
								
							}
							
						}).catch(() =>{
						
						})
					}
				}else{
					if (this.currentIndex === '') {
						return false
					}
					let aAnswer;
					if(this.currentIndex==0){
						aAnswer='A'
					}
					if(this.currentIndex==1){
						aAnswer='B'
					}
					if(this.currentIndex==2){
						aAnswer='C'
					}
					if(this.currentIndex==3){
						aAnswer='D'
					}
					let params={}
					let url;
					if(this.type==1){
						 url=this.baseurls+'/exercise/getExerciseAnswer'
						 params={
						 	tpid:this.questionList.tpid,
						 	aAnswer:aAnswer,
						 }
					}
					if(this.type==2){
						 url=this.baseurls+'/prelim/postPrelimAnswer'
						 params={
						 	tpid:this.questionList.tpid,
						 	aAnswer:aAnswer,
						 	eid:this.eid,
							ttype:0,
							index:this.xuhaonum
						 }
					}
					let that=this;
					this.axios.get(url, {
						headers:{
							'Authorization':localStorage.getItem('Authorization')
						},
						params:params
					}).then(res =>{
						if(res.data.code=='406'){
							alert('答题异常，即将返回首页！');
							that.$router.push({
							  name: 'Home',
							})
						}else{
						that.isdisable=true
						this.showget=true
						that.rightanswers=res.data.resultData.answer
						let rianswer=res.data.resultData.answer;
						if (rianswer == 'A') {
							that.rightAnswer = 0
						} else if (rianswer == 'B') {
							that.rightAnswer = 1
						} else if (rianswer == 'C') {
							that.rightAnswer = 2
						} else if (rianswer == 'D') {
							that.rightAnswer = 3
						} else {
							that.rightAnswer = ''
						}
						if (that.currentIndex == that.rightAnswer) {
							that.$refs.targets[that.currentIndex].style.backgroundColor = '#c1e0f8';
							that.$emit('getright')
						} else {
							that.$emit('getwron')
							that.$refs.targets[that.currentIndex].style.backgroundColor = '#f8b3b4';
							that.$refs.targets[that.rightAnswer].style.backgroundColor = '#c1e0f8';
						}
						var _that=that;
						if(getparams == 'ishomes'){
							if(_that.type!=3){
								setTimeout(function() {
									_that.$emit('gethome')
								}, 1000)
							}
						}
						let size=this.xuhaonum+1
						if(size<that.cursize){
							setTimeout(function() {
								_that.$emit('getFun', that.aboutnum);
								sessionStorage.setItem('xuhaonum',_that.xuhaonum+1)
								// _that.$store.commit('updatacurnum', _that.xuhaonum+1)
							}, 1000)
						}
						}
					}).catch(() =>{
					
					})
				}
			},
			mutonext(getparams) {
				//重复点击
				if(this.muclick){
					return false
				}else{
					this.muclick=true
				}
				//提交后无法重复提交
				if(this.isdisable){
					return false
				}
				if(this.type==3){
					if (this.currentIndex === '') {
						let size=this.xuhaonum+1
						if(size<this.cursize){
							this.$emit('getFun', this.aboutnum);
							localStorage.setItem('xuhaonum',this.xuhaonum+1)
						}else{
							alert('最后一题请选择答案后再提交')
						}
						
					}else{
						for(let j=0;j<this.arr.length;j++){
							if(this.arr[j]==0){
								this.muanswer=this.muanswer+'A'
							}
							if(this.arr[j]==1){
								this.muanswer=this.muanswer+'B'
							}
							if(this.arr[j]==2){
								this.muanswer=this.muanswer+'C'
							}
							if(this.arr[j]==3){
								this.muanswer=this.muanswer+'D'
							}
							if(this.arr[j]==4){
								this.muanswer=this.muanswer+'E'
							}
						}
						var _arr = this.muanswer.split("");
						var arr = _arr.sort();
						var _str = arr.join("");
						let params={
							tpid:this.questionList.tpid,
							aAnswer:_str,
							eid:this.eid,
							ttype:1,
							index:this.xuhaonum
						}
						let url=this.baseurls+'/prelim/postPrelimAnswer'
						let that=this;
						this.axios.get(url, {
							headers:{
								'Authorization':localStorage.getItem('Authorization')
							},
							params:params
						}).then(res =>{
							if(res.data.code=='406'){
								alert('答题异常，即将返回首页！');
								that.$router.push({
								  name: 'Home',
								})
							}else{
							var answ = res.data.resultData.answer;
							if(answ==_str){
								that.$emit('getright')
							}else{
								that.$emit('getwron')
							}
							let numxh=parseInt(localStorage.getItem('xuhaonum'))+1;
							if(res.data.resultData.timeout || numxh==100){
								that.$emit('gethome')
							}else{
								that.$emit('getFun', that.aboutnum);
								localStorage.setItem('xuhaonum',that.xuhaonum+1)
							}
							}
						}).catch(() =>{
						
						})
					}
				}else{
					this.showget=true
					if (this.arr.length == 0) {
						return false
					}
					for(let j=0;j<this.arr.length;j++){
						if(this.arr[j]==0){
							this.muanswer=this.muanswer+'A'
						}
						if(this.arr[j]==1){
							this.muanswer=this.muanswer+'B'
						}
						if(this.arr[j]==2){
							this.muanswer=this.muanswer+'C'
						}
						if(this.arr[j]==3){
							this.muanswer=this.muanswer+'D'
						}
						if(this.arr[j]==4){
							this.muanswer=this.muanswer+'E'
						}
					}
					var _arr = this.muanswer.split("");
					var arr = _arr.sort();
					var _str = arr.join("");
					let params={}
					let url;
					if(this.type==1){
						 url=this.baseurls+'/exercise/getExerciseAnswer'
						 params={
						 	tpid:this.questionList.tpid,
						 	aAnswer:_str
						 }
					}
					if(this.type==2){
						 url=this.baseurls+'/prelim/postPrelimAnswer'
						 params={
						 	tpid:this.questionList.tpid,
						 	aAnswer:_str,
							eid:this.eid,
							ttype:0,
							index:this.xuhaonum
						 }
					}
					let that=this;
					this.axios.get(url, {
						headers:{
							'Authorization':localStorage.getItem('Authorization')
						},
						params:params
					}).then(res =>{
						if(res.data.code=='406'){
							alert('答题异常，即将返回首页！');
							that.$router.push({
							  name: 'Home',
							})
						}else{
						that.isdisable=true
						that.rightanswers=res.data.resultData.answer
						var answ = res.data.resultData.answer;
						if(answ==_str){
							that.$emit('getright')
						}else{
							that.$emit('getwron')
						}
						for (var i = 0; i < answ.length; i++) {
							if (answ[i] == 'A') {
								if (that.arr.includes(0)) {
									that.$refs.targets[0].style.backgroundColor = '#c1e0f8'
								} else {
									that.$refs.targets[0].style.backgroundColor = '#f8b3b4'
								}
							} else if (answ[i] == 'B') {
								if (that.arr.includes(1)) {
									that.$refs.targets[1].style.backgroundColor = '#c1e0f8'
								} else {
									that.$refs.targets[1].style.backgroundColor = '#f8b3b4'
								}
							} else if (answ[i] == 'C') {
								if (that.arr.includes(2)) {
									that.$refs.targets[2].style.backgroundColor = '#c1e0f8'
								} else {
									that.$refs.targets[2].style.backgroundColor = '#f8b3b4'
								}
							} else if (answ[i] == 'D') {
								if (that.arr.includes(3)) {
									that.$refs.targets[3].style.backgroundColor = '#c1e0f8'
								} else {
									that.$refs.targets[3].style.backgroundColor = '#f8b3b4'
								}
							} else if (answ[i] == 'E') {
								if (that.arr.includes(4)) {
									that.$refs.targets[4].style.backgroundColor = '#c1e0f8'
								} else {
									that.$refs.targets[4].style.backgroundColor = '#f8b3b4'
								}
							} else {
								that.rightAnswer = ''
							}
						}
						var _that = that;
						if(getparams == 'ishomes'){
							if(_that.type!=3){
								setTimeout(function() {
									_that.$emit('gethome')
								}, 1000)
							}
						}
						let size=this.xuhaonum+1
						if(size<that.cursize){
							setTimeout(function() {
								_that.$emit('getFun', that.aboutnum);
								sessionStorage.setItem('xuhaonum',_that.xuhaonum+1)
								// _that.$store.commit('updatacurnum', _that.xuhaonum+1)
							}, 1000)
						}
						}
					}).catch(() =>{
					
					})
				}
			},
			toindex(type) {
				if(type==0 || type==2){
					this.tonext('ishomes');
				}
				if(type==1){
					this.mutonext('ishomes');
					// var _that=this;
					// if(this.type!=3){
					// 	setTimeout(function() {
					// 		_that.$emit('gethome')
					// 	}, 1000)
					// }
					
				}
			},
			getpaper() {
				let that=this;
				let params;
				let url;
				if(this.type==1){
					 url=this.baseurls+'/exercise/createExercise';
					 params={
					 	index:that.xuhaonum,
					 }
				}
				if(this.type==2){
					 url=this.baseurls+'/prelim/getStage';
					 params={
					 	index:that.xuhaonum,
					 	eid:this.eid,
						ttype:0
					 }
				}
				if(this.type==3){
					 url=this.baseurls+'/prelim/getStage';
					 params={
					 	index:that.xuhaonum,
					 	eid:this.eid,
						ttype:1
					 }
				}
				this.axios.get(url, {
					headers:{
					    'Authorization':localStorage.getItem('Authorization')
					},
					params:params
				}).then(res =>{
					if(res.data.code == '404' || res.data.code == '406'){
						alert('答题异常，即将返回首页!');
						that.$router.push({
						  name: 'Home',
						})
					}else{
						that.cursize=res.data.resultData.totalSize;
						that.$emit('getsize', that.cursize);
						that.$emit('getnow', that.xuhaonum+1);
						if (that.xuhaonum == that.cursize-1) {
							that.istijiao = false
						}
						that.questionList=res.data.data;
						if(that.questionList.aoption !=''){
							that.answerlist.push('A.'+that.questionList.aoption)
						}
						if(that.questionList.boption !=''){
							that.answerlist.push('B.'+that.questionList.boption)
						}
						if(that.questionList.coption !=''){
							that.answerlist.push('C.'+that.questionList.coption)
						}
						if(that.questionList.doption !=''){
							that.answerlist.push('D.'+that.questionList.doption)
						}
						if(that.questionList.eoption !=''){
							that.answerlist.push('E.'+that.questionList.eoption)
						}
					}
					
				}).catch(() =>{

				})
			}
		},
		// beforeDestroy() {
		//     clearInterval(this.timer);        
		//     this.timer = null;
		// }
	}
</script>
