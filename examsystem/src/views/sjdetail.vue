<style scoped="scoped">
	.maindiv {
		background: #eee;
		width: 100%;
		height: 100%;
		padding: 20px 15px;
		box-sizing: border-box;
	}

	.tops {
		width: 345px;
		height: auto;
		background: #FFFFFF;
		padding: 5px 10px 20px 10px;
		box-sizing: border-box;
		width: 100%;
		margin:0 auto
	}

	.topli {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 23px;
	}

	.liimg1 {
		width: 21px;
		height: 21px;
		background: url(../assets/detail2.png) no-repeat;
		background-size: 21px 21px;
	}
	.liimg2 {
		width: 21px;
		height: 21px;
		background: url(../assets/detail1.png) no-repeat;
		background-size: 21px 21px;
	}
	.liimg3 {
		width: 21px;
		height: 21px;
		background: url(../assets/detail4.png) no-repeat;
		background-size: 21px 21px;
	}
	.liimg4 {
		width: 21px;
		height: 21px;
		background: url(../assets/detail3.png) no-repeat;
		background-size: 21px 21px;
	}
	.litext{
		font-size: 15px;
		font-weight: 400;
		color: #222222;
		margin-left: 10px;
		text-align: left;
	}
	.redtext{
		color: #FF2D2D;
	}
	.fenge{
		width: 315px;
		height: 1px;
		background: #EEEEEE;
		border-radius: 1px;
		margin-top: 23px;
	}
	.tixing{
		font-size: 15px;
		font-weight: 400;
		color: #222222;
		margin-top: 20px;
		text-align: left;
	}
	.guizetext{
		font-size: 13px;
		font-weight: 400;
		color: #666666;
		line-height: 20px;
		margin-top: 11px;
		text-align: left;
	}
	.paperlist{
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		margin-top: 10px;
	}
	.paperli{
		width: 34px;
		height: 27px;
		line-height: 27px;
		background: #EEEEEE;
		border: 1px solid #BCBCBC;
		border-radius: 3px;
		font-size: 13px;
		font-weight: bold;
		color: #AAAAAA;
		margin-left: 10px;
		margin-top: 10px;
	}
	.paperlinone{
		background: #FFFFFF !important;
		border: 1px solid #0684EB !important;
		color: #0684EB !important;
	}
	.paperliba{
		width: 34px;
		height: 27px;
		line-height: 27px;
		background: #0684EB;
		border: 1px solid #0684EB;
		border-radius: 3px;
		font-size: 13px;
		font-weight: bold;
		color: #FFFFFF;
		margin-left: 10px;
		margin-top: 10px;
		
	}
	.paperlipa{
		width: 34px;
		height: 27px;
		line-height: 27px;
		background: #FFFFFF;
		border: 1px solid #BCBCBC;
		border-radius: 3px;
		font-size: 13px;
		font-weight: bold;
		color: #BCBCBC;
		margin-left: 10px;
		margin-top: 10px;
	}
	.bombutton{
		width: 295px;
		height: 44px;
		background: #0684EB;
		border-radius: 22px;
		line-height: 44px;
		font-size: 18px;
		font-weight: 400;
		color: #FFFFFF;
		margin: 31px auto 0; 
	}
	.combutton{
		width: 295px;
		height: 44px;
		background: #ccc;
		border-radius: 22px;
		line-height: 44px;
		font-size: 18px;
		font-weight: 400;
		color: #FFFFFF;
		margin: 31px auto 0; 
	}
	.bomtext{
		font-size: 13px;
		font-weight: 400;
		color: #0684EB;
		line-height: 21px;
		width: 162px;
		margin:25px auto 0;
	}
	.imgback{
		width: 30px;
		height: 17px;
	}
	.redte{
		color: #EB0505;
	}
	.mainnotice{
		height: 150px;
		width: 300px;
		background: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 45%;
		left: 12%;
		z-index: 999;
	}
	.masterdiv{
		width: 100%;
		height: 100%;
		background: #333333;
		opacity: 0.5;
		position: absolute;
		top: 0;
		left: 0;
	}
	.topsno{
		width: 100%;
		height: 100px;
		font-size: 12px;
		font-weight: 400;
		color: #5E5E5E;
		line-height: 18px;
		padding: 22px 28px;
		box-sizing: border-box;
		border-bottom: 1px solid #EEEEEE;
	}
	.nobtn{
		display: flex;
		flex-direction: row;
	}
	.nobtn>div{
		flex: 1;
		text-align: center;
	}
	.cancleno{
		font-size: 14px;
		font-weight: 400;
		color: #AAAAAA;
		line-height: 50px;
		border-right: 1px solid #EEEEEE;
	}
	.beginno{
		font-size: 14px;
		font-weight: 400;
		color: #586B95;
		line-height: 50px;
	}
</style>
<template>
	<div class="maindiv" v-if='type==1' style="height: 100vh;">
		<div class="tops">
			<div class="topli" @click="backhome">
				<img class="imgback" src="../assets/back.png" />
				<div class="litext">返回首页</div>
			</div>
			<div class="topli">
				<div class="liimg1"></div>
				<div class="litext">考试类型：试题练习</div>
			</div>
			<div class="topli">
				<div class="liimg2"></div>
				<div class="litext">总题数：每套试题<span class="redtext">2</span>道题，每人可以做<span class="redtext">3</span>套试题</div>
			</div>
			<div class="topli">
				<div class="liimg3"></div>
				<div class="litext">考试时间：每套试题<span class="redtext">60</span>分钟</div>
			</div>
			<div class="topli">
				<div class="liimg4"></div>
				<div class="litext">总分数：当前为练习模式，<span class="redtext">不计入</span>总分</div>
			</div>
			<div class="fenge"></div>
			<div class="tixing">题型介绍</div>
			<div class="guizetext">注：每个选手作完3套试题可以得到行行造价为各位选手 准备的一份奖品哦，快来练习体验吧！</div>
			<div class="fenge"></div>
			<div class="xuanze" v-if="this.type==2">
				<div class="tixing">选择试卷</div>
				<div class="paperlist">
					<div v-for="(item,index) in paperlist">
						<div  :key='index'  v-bind:class="['paperlipa',{paperlinone:currentIndex === index}]" v-if="item.tstate==0" @click="checkedpa(index,item.eid)">{{index+1}}</div>
						<div  :key='index' class="paperliba"  v-if="item.tstate==1">{{index+1}}</div>
						<div  :key='index' class="paperli"  v-if="item.tstate==2" >{{index+1}}</div>
					</div>
					
					<!-- <div class="paperlinone">2</div> -->
					<!-- <div class="paperli">2</div> -->
				</div>
			</div>
		</div>
		<div :class="{'bombutton':isbtn,'combutton':!isbtn}" @click="tokaoshi">开始答题</div>
		<div class="bomtext">行行云算 cc.hhzj.net 提醒您每周要做10套试题哦~</div>
	</div>
	<div class="maindiv" v-else-if='type==2'>
		<div class="tops">
			<div class="topli" @click="backhome">
				<img class="imgback" src="../assets/back.png" />
				<div class="litext">返回首页</div>
			</div>
			<div class="topli">
				<div class="liimg1"></div>
				<div class="litext">比赛单元：自由竞答</div>
			</div>
			<div class="topli">
				<div class="liimg2"></div>
				<div class="litext">总题数：每套答卷<span class="redtext">25</span>道题，共<span class="redtext">20</span>套答卷</div>
			</div>
			<div class="topli">
				<div class="liimg3"></div>
				<div class="litext">比赛时间：每套答卷<span class="redtext">30</span>分钟，每周<span class="redtext">10</span>套</div>
			</div>
			<div class="topli">
				<div class="liimg4"></div>
				<div class="litext">总分数：每套答卷满分<span class="redtext">100</span>分，共<span class="redtext">2000</span>分</div>
			</div>
			<div class="fenge"></div>
			<div class="tixing">题型介绍</div>
			<div class="guizetext">一、单选（每题只有一个正确答案，每题4分，共10题， 共40分。）</div>
			<div class="guizetext">二、多选（每题至少有两个正确答案，每题4分，共5题， 共20分。）</div>
			<div class="guizetext">三、判断题（每题只有一个正确答案，每题4分，共10题， 共40分。）</div>
			<div class="fenge"></div>
			<div class="xuanze" v-if="this.type==2">
				<div class="paperlist">
					<div v-for="(item,index) in paperlist">
						<div  :key='index'  v-bind:class="['paperlipa',{paperlinone:currentIndex === index}]" v-if="item.tstate==0" @click="checkedpa(index,item.eid)">{{index+1}}</div>
						<div  :key='index' class="paperliba"  v-if="item.tstate==1">{{index+1}}</div>
						<div  :key='index' class="paperli"  v-if="item.tstate==2" @click="timealert(index)">{{index+1}}</div>
					</div>
					
					<!-- <div class="paperlinone">2</div> -->
					<!-- <div class="paperli">2</div> -->
				</div>
			</div>
		</div>
		<div :class="{'bombutton':isbtn,'combutton':!isbtn}" @click="tokaoshi">开始答题</div>
		<div class="bomtext">行行云算 cc.hhzj.net 提醒您每周要做10套试题哦~</div>
		<div class="masterdiv" v-show="istimeout"></div>
		<div class="mainnotice" v-show="istimeout">
			<div class="topsno">系统检测到您在答题过程中多次退出，存在刷题行为，本次答题将是此答卷的<span style="color: #FF0D0D;">最后一次答题机会</span>，是否开启答题？</div>
			<div class="nobtn">
				<div class="cancleno" @click="istimeout=false">取消</div>
				<div class="beginno" @click="newbegin()">开始答题</div>
			</div>
		</div>
	</div>
	<div class="maindiv" v-else>
		<div class="tops">
			<div class="topli" @click="backhome">
				<img class="imgback" src="../assets/back.png" />
				<div class="litext">返回首页</div>
			</div>
			<div class="topli">
				<div class="liimg1"></div>
				<div class="litext">比赛单元：自由竞答（冲顶竞速+实操算量）</div>
			</div>
			<div class="topli">
				<div class="liimg2"></div>
				<div class="litext">总题数：冲顶竞速<span class="redtext">100</span>道+实操量算<span class="redtext">10</span>道</div>
			</div>
			<div class="topli">
				<div class="liimg3"></div>
				<div class="litext">考试时间：冲顶竞速<span class="redtext">5</span>分钟+实操算量<span class="redtext">35</span>分钟</div>
			</div>
			<div class="topli">
				<div class="liimg4"></div>
				<div class="litext">总分数：冲顶竞速<span class="redtext">1000</span>分+实操算量<span class="redtext">500</span>分</div>
			</div>
			<div class="fenge"></div>
			<div class="tixing">题型介绍</div>
			<div class="guizetext">一、冲顶竞速题型为单选题和判断题（每题只有一个正确 答案，每题10分，共100题，共1000分。）</div>
			<div class="guizetext">二、实操算量为填空题（2道手工算量+8道建模算量，每题 50分）。 实操算量按准确率评分，答题结果与标准答案偏离率≤2%， 该项得满分</div>
			<div class="guizetext">注：冲顶竞速题每答对1题加10分，答错1题在本套试题已 得分数基础上扣10分，扣成0分为止，弃答当前题目可直接 进入下一题，不扣分</div>
			<div class="fenge"></div>
			<div class="tixing">实操文件</div>
			<div class="guizetext">文件获取地址：<span class="redte">{{bimUrl}}</span></div>
			<div class="guizetext">文件发放时间：<span class="redte">考试开始前5分钟</span></div>
			<div class="guizetext">注：选手<span class="redte">要提前在电脑端</span>打开此地址获取文件</div>
		</div>
		<div class="combutton" v-show='istimeshow' >{{getshowsecond}}s后开始答题</div>
		<div class="bombutton" v-show='!istimeshow'  @click="tokaoshi">{{testone}}</div>
		<div class="bomtext">行行云算 cc.hhzj.net 提醒您每周要做10套试题哦~</div>
	</div>
</template>

<script>
	export default {
		name: 'sjdetail',
		data() {
			return {
				type:'',
				paperlist:{},
				currentIndex:'',
				eid:'',
				isbtn:true,
				oneortwo:'',
				bimUrl:'',
				getshowsecond:null,
				istimeshow:true,
				istimeout:false,
				testone:'开始答题'
			}
		},
		created() {
			this.type=sessionStorage.getItem('type');
			if(this.type==3){
				this.getshowsecond=sessionStorage.getItem('getshowsecond');
				var _that=this;
				var timer = window.setInterval(() => {
					if (_that.getshowsecond > 0) {
						--_that.getshowsecond;
						sessionStorage.setItem('getshowsecond',_that.getshowsecond);
					} else {
						_that.istimeshow=false;
						_that.getjxpaper();
						clearInterval(timer);
					}
				}, 1000)
			}
			
			
			if(this.type==2){
				this.isbtn=false
				this.getallpaper()
			}
			if(this.type==3){
				this.getjxpaper();
				this.bimUrl=sessionStorage.getItem('bimUrl')
			}
			
		},
		methods: {
			timealert(index){
				if(index>9 && index<15){
					alert('9月21日开放！')
				}
				if(index>14 && index<20){
					alert('9月23日开放！')
				}
			},
			backhome(){
				this.$router.push({
				  name: 'Home',
				})
			},
			newbegin(){
				this.$router.push({
				  name: 'header',
				  params:{
					  type:2,
					  eid:this.eid
				  }
				})
			},
			tokaoshi(){
				if(this.type==1){
					if(parseInt(sessionStorage.getItem("allnums"))>=3){
						alert('您已答题三次，无法再次练习')
					}else{
						this.$router.push({
						  name: 'header',
						  params:{
							  type:1
						  }
						})
					}
				}else if(this.type==2){
					if(this.eid==''){
						return false
					}else{
						var that=this
						this.axios.get(this.baseurls+'/prelim/getStageNum', {
							headers:{
							    'Authorization':localStorage.getItem('Authorization')
							},
							params:{
								eid:that.eid
							}
						}).then(res =>{
							let num=res.data.data
							if(num<2){
								this.$router.push({
								  name: 'header',
								  params:{
									  type:2,
									  eid:that.eid
								  }
								})
							}else if(num==2){
								that.istimeout=true
							}else{
								alert('您的答题次数超过限制，无法进入答题！')
								return false
							}
						}).catch(() =>{
						
						})
						
					}
					
				}else if(this.type==3){
					var twice =parseInt(localStorage.getItem('twice'));
						twice++;
						localStorage.setItem('twice',twice);
						localStorage.setItem('jdtype',1);//1为冲顶题 2为实操题
						if(this.oneortwo == 'own'){
							this.$router.push({
							  name: 'header',
							  params:{
								  type:this.type,
								  eid:this.eid
							  }
							})
						}else if(this.oneortwo == 'two'){
							var twostatime=localStorage.getItem('twostatime')
							let date1=new Date();  //开始时间
							let date2=new Date(twostatime);    //结束时间
							let date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
							var datat=parseInt(date3/1000)
							if(datat<0){
								this.$router.push({
									name: 'newheader',
								})
							}else{
								alert('试题暂未开启，请稍后重试')
							}
						}
					
				}
				
			},
			getallpaper(){
				var that=this
				this.axios.get(this.baseurls+'/prelim/getQuestion', {
					headers:{
					    'Authorization':localStorage.getItem('Authorization')
					},
					params:{
						ttype:0
					}
				}).then(res =>{
					that.paperlist=res.data.data
				}).catch(() =>{
				
				})
			},
			getjxpaper(){
				var that=this
				this.axios.get(this.baseurls+'/prelim/getQuestion', {
					headers:{
					    'Authorization':localStorage.getItem('Authorization')
					},
					params:{
						ttype:1
					}
				}).then(res =>{
					if(res.data.code==200){
						let reslist=res.data.data;
						localStorage.setItem('ontstatime',reslist[0].eovertime);
						localStorage.setItem('twostatime',reslist[1].ebegintime);
						for(let i=0;i<reslist.length;i++){
							let date1=new Date();  //开始时间
							let date2=new Date(reslist[i].eovertime);    //结束时间
							let date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
							localStorage.setItem('maxtime',parseInt(date3/1000));
							if(reslist[i].ttype==1 && reslist[i].tstate==0){
								localStorage.setItem('eid',reslist[i].eid)
								that.oneortwo='own';
								break
							}
							if(reslist[i].ttype==2 && reslist[i].tstate==0){
								that.oneortwo='two';
								break
							}
							if(reslist[i].ttype==2 && reslist[i].tstate==1){
								alert('答题已完成！');
								that.testone="答题已完成";
							}
							// else if(reslist[i].ttype==2 && reslist[i].tstate==0){
							// 	that.oneortwo='two'
							// 	return false
							// }else if(reslist[i].ttype==2 && reslist[i].tstate==1){
							// 	alert('不在考试时间内，无法答题！')
							// }
							
						}
					}
					
				}).catch(() =>{
				
				})
			},
			checkedpa(index,id){
				this.currentIndex = index;
				this.eid=id;
				if(this.eid != null){
					this.isbtn=true
				}
				sessionStorage.setItem('eid',this.eid)
			}
		}
	}
</script>
