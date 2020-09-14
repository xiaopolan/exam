<style scoped="scoped">
	.maintop{
		width: 100%;
		height: 220px;
		background: url(../assets/img1.png) no-repeat;
		background-size: 100% 220px;
	}
	.mainsrc{
		width: 100%;
		height: 192px;
	}
	.topdiv{
		position: absolute;
		top: 30px;
		left: 0;
		width: 100%;
	}
	.tips1{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}
	.bgdiv{
		width: 4px;
		height: 29px;
		background: #FE7604;
		border-radius: 0px 3px 3px 0px;
	}
	.toptext{
		font-size: 24px;
		font-weight: bold;
		color: #FFFFFF;
		margin-left: 15px;
	}
	.toptext2{
		margin-top: 20px;
		font-size: 14px;
		font-weight: 400;
		color: #FFFFFF;
		text-align: left;
		margin-left: 17px;
		display: flex;
		flex-direction: row;
	}
	.fhtexts{
		margin-left: auto;
		font-size: 14px;
		font-weight: 400;
		color: #DCA43E;
		line-height: 35px;
		margin-right: 10px;
	}
	.maind1{
		width: 330px;
		height: 100px;
		margin: 0 auto;
		background: url(../assets/img8.png) no-repeat ;
		background-size: 330px 100px;
		padding-top: 24px;
		box-sizing: border-box;
		margin-top: -95px;
	}
	.maint1{
		font-size: 18px;
		font-weight: bold;
		color: #FFFFFF;
		margin-left: 100px;
	}	
	.maint2{
		font-size: 13px;
		font-weight: 400;
		color: #FFFFFF;
		margin-top: 13px;
		margin-left: 100px;
	}
	.maind2{
		width: 330px;
		height: 100px;
		margin: 0 auto;
		background: url(../assets/img4.png) no-repeat ;
		background-size: 330px 100px;
		padding-top: 24px;
		box-sizing: border-box;
		margin-top: 12px;
		position: relative;
	}
	.maind3{
		width: 330px;
		height: 100px;
		margin: 0 auto;
		background: url(../assets/img5.png) no-repeat ;
		background-size: 330px 100px;
		padding-top: 24px;
		box-sizing: border-box;
		margin-top: 12px;
		position: relative;
	}
	.mainds3{
		width: 330px;
		height: 100px;
		margin: 0 auto;
		background: url(../assets/newimg1.png) no-repeat ;
		background-size: 330px 100px;
		padding-top: 24px;
		box-sizing: border-box;
		margin-top: 12px;
		position: relative;
	}
	.gettime{
		width: 65px;
		height: 62px;
		position: absolute;
		top: 0;
		right: 0;
		background: url(../assets/img6.png) no-repeat;
		background-size: 65px 62px;
	}
	.rulediv{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 15px 0 10px;
	}
	.ruleimg{
		width: 11px;
		height: 11px;
		background: url(../assets/img2.png) no-repeat;
		background-size: 11px 11px;
	}
	.ruletext{
		margin-left: 10px;
		font-size: 12px;
		font-weight: 400;
		color: #888888;
	}
	.bottomimg{
		width: 100%;
		height: 91px;
		background: url(../assets/img3.png) no-repeat;
		background-size: 100% 91px;
		/* position: fixed;
		bottom: 0; */
		max-width: 500px
	}
	.lefttext{
		width: 152px;
		height: 23px;
		line-height: 23px;
		background:rgba(0, 0, 0, 0.28);
		border-radius: 5px 0px 0px 5px;
		font-size: 14px;
		font-weight: 400;
		color: #FFFFFF;
		margin-left: auto;
		padding-left: 10px;
		box-sizing: border-box;
	}
	.nowsocer{
		color: #FFC021;
	}
	.popdiv{
		width: 100%;
		height: 100vh;
		background: rgb(0,0,0,0.6);
		position: absolute;
		top: 0;
		left:0;
		z-index: 999;
	}
	.miantext{
		width: 90%;
		height: 590px;
		background: #FFFFFF;
		border-radius: 5px;
		position: absolute;
		top: 45px;
		left:5%;
		z-index: 1000;
		padding: 16px 20px;
		box-sizing: border-box;
		overflow: scroll;
	}
	.closebtn{
		position: absolute;
		top: 10px;
		right: 12px;
		font-size: 27px;
	}
	.kaotext{
		font-size: 13px;
		font-weight: 400;
		color: #343434;
		line-height: 20px;
		text-align: left;
		margin-top: 19px;
	}
</style>
<template>
  <div class="home">
	  <div class="maintop">
		  <!-- <img class="mainsrc" src="../assets/img1.png" /> -->
		  <div class="topdiv">
			  <div class="tips1">
				  <div class="bgdiv"></div>
				  <div class="toptext">线上答题系统</div>
				  <div class="fhtexts" @click="backurls">返回个人中心</div>
			  </div>
			  <div class="toptext2">
				  <div>目标分数3500分-<span class="nowsocer">{{allcan.username}}{{allcan.userScore}}分</span></div>
				  <div class="lefttext" v-if="allcan.firstScore<=0" style="text-align: center;">快来打榜</div>
				  <div class="lefttext" v-else>第1名 {{allcan.firstName}} {{allcan.firstScore}}分</div>
			  </div>
		  </div>
	  </div>
	  <!-- <div class="maind1" @click="toExam(1)">
		  <div class="maint1">测试答题</div>
		  <div class="maint2">练习可以拿奖品</div>
	  </div> -->
	  <div class="maind2" @click="toExamch(2)">
		  <div class="maint1">自由竞答</div>
		  <div class="maint2">开放时间：9月14日-9月25日</div>
		  <div class="gettime" v-show="allcan.stageOne==0"></div>
	  </div>
	  <div class="maind3" @click="jxExamch(3)">
		  <div class="maint1">限时竞答</div>
		  <div class="maint2">开放时间：9月27日 10:00-10:30</div>
		  <div class="gettime" v-show="allcan.stageTwo==0 && (twice>3 || twice<1)"></div>
	  </div>
	  <div class="mainds3" @click="topaihang()">
		  <div class="maint1">线上竞赛-排行榜</div>
		  <div class="maint2" style="margin-top: 6px;width: 215px;">系统留言板在此开放快进来聊聊“我和我的造价人生”吧！</div>
	  </div>
	  <div class="rulediv" @click="openTip()">
		  <div class="ruleimg"></div>
		  <div class="ruletext">查看答题细则</div>
	  </div>
	  <div class="bottomimg"></div>
	  <div class="popdiv" v-show="isTip"></div>
	  <div class="miantext" v-show="isTip">
		  <div class="closebtn" @click="closeText()">×</div>
		  <div>考试细则</div>
		  <div class="kaotext">
			<p style="text-indent:2em;">预赛包括自由竞答和限时竞答，比赛周期约为2周时间，满分3500分，预赛成绩占总成绩的30%。</p>
			<p style="text-indent:2em;">1.自由竞答：9月14日—9月25日，比赛系统每周上传10套基础理论题（上传时间按系统提示），选手可在一周的时间内自行安排上线答题，每套题限定在30分钟内完成，超时系统自动提交（答题过程中因故闪退的，答题记录失效，需再次进入重新计时、重新答题）。选手应在两周内完成20套基础理论题，未完成的按实际完成套数记录成绩。</p>
			<p style="text-indent:2em;">计分规则：20套基础理论题满分2000分。每套基础理论题设单选、多选和判断题共25题，满分100分/套。其中：单选题10道，每题4分；多选题5道，每题4分；判断题10道，每题4分。选手有2次容错机会，即答错2题以内（含）不扣分，2题以上答错扣分，扣分以套内分数扣完为止。</p>
			<p style="text-indent:2em;">2.限时竞答：9月27日，比赛系统上传1套实操竞速题，包括冲顶竞速、实操算量两个单元。其中，冲顶竞速题型为单选题和判断题，选手比拼答题速度和答题正确率，如弃答当前题目，可直接点击“下一题”继续答题，力求在5分钟之内答对尽可能多的题，最多可答完100题；实操算量为填空题，要求选手在25分钟内运用算量软件完成建模算量，超时系统自动提交。实操竞速单元合计用时30分钟。</p>
			<p style="text-indent:2em;">计分规则：实操竞速满分1500分。其中：冲顶竞速题每答对1题加10分，答错1题扣10分，弃答不加分也不减分，满分1000分；实操算量题，共10道，每题50分，满分500分。建模算量按准确率评分，答题结果与标准答案的偏离率≤2%，该项得满分；偏离率＞2%，按偏离率计算得分[例：某项偏离率为3%，则该项得分=对应分值*（1-3%）]，超时未答题或偏离率大于10%则扣分。扣分以当前比赛单元内得分扣完为止。</p>
          </div>
	  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
	  
  },
  data(){
	  return{
		  isTip:false,
		  allcan:{
			  
		  },
		  twice:0
		  // firstName:'',
		  // firstScore:'',
		  // userScore:'',
		  // stageOne:'',
		  // stageTwo:''
	  }
  },
  created() {
  	  sessionStorage.clear();
	  this.$store.commit('updatamax',30*60);
	  this.$store.commit('updatacurnum',0);
	  if(localStorage.getItem('twice')){
	  	this.twice=localStorage.getItem('twice');
	  }else{
	  	localStorage.setItem('twice',0)
	  }
	  this.getAllsc();
  },
  methods:{
	  backurls(){
		  window.location.href = 'http://www.hhzj.net/hhxj/js_zj'
	  },
	  toExam(num){
		  let allnums=parseInt(this.allcan.nums);
		  sessionStorage.setItem('allnums',allnums)
		  this.$router.push({
			name: 'sjdetail',
				params:{
					type:num,
				}
		  })
		  sessionStorage.setItem('type',num)
		  
	  },
	  toExamch(num){
		  if(this.allcan.stageOne==0){
		  	return false
		  }
		  this.$router.push({
		    name: 'sjdetail',
			params:{
				type:num,
			}
		  })
		  sessionStorage.setItem('type',num)
	  },
	  jxExamch(num){
		  if(this.allcan.stageTwo==0){
			  if(this.twice>3){
				  return false
			  }
		  }else{
			  if(this.twice>3){
			  	return false
			  }
		  }
		  this.$router.push({
		    name: 'sjdetail',
			params:{
				type:num,
			}
		  })
		  sessionStorage.setItem('type',num);
	  },
	  closeText(){
		  this.isTip=false
	  },
	  openTip(){
		  this.isTip=true
	  },
	  getAllsc(){
		  var that=this
		  // /api/exercise/createExercise?index=46
		  this.axios.get(this.baseurls+'/prelim/getHomeState', {
		  	headers:{
		  	    'Authorization':localStorage.getItem('Authorization')
		  	},
		  }).then(res =>{
			that.allcan=res.data.resultData
			sessionStorage.setItem('bimUrl',res.data.resultData.bimUrl)
		  }).catch(() =>{
		  
		  })
	  },
	  topaihang(){
		  this.$router.push({
		    name: 'paihang',
		  })
	  }
  }
}
</script>
