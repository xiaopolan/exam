<style scoped="scoped">
	.result{
		padding-top: 128px;
		box-sizing: border-box;
	}
	.resultimg{
		width: 156px;
		height: 126px;
		margin: 0 auto;
	}
	.gxtext{
		font-size: 20px;
		font-weight: 400;
		color: #2E78EE;
		margin-top: 31px;
	}
	.textone{
		margin-top: 45px;
		font-size: 15px;
		font-weight: 400;
		color: #4D4D4D;
		line-height: 29px;
	}
	.texttwo{
		font-size: 15px;
		font-weight: 400;
		color: #FFB400;
		line-height: 29px;
	}
	.textthr{
		margin-top: 10px;
		font-size: 15px;
		font-weight: 400;
		color: #4D4D4D;
		line-height: 29px;
	}
	.toindex{
		width: 220px;
		height: 39px;
		background: #FFFFFF;
		border: 1px solid #2E78EE;
		border-radius: 3px;
		font-size: 15px;
		font-weight: 400;
		color: #2E78EE;
		line-height: 39px;
		margin:28px auto
	}
	.imgtwo{
		width: 328px;
		height: 80px;
		margin: 54px auto 0;
	}
</style>
<template>
  <div class="result">
	  <img class="resultimg" src="../assets/result1.png" />
	  <div class="gxtext">恭喜！已成功提交!</div>
	  <div v-show="type==1" style="margin-top: 10px;">练习三次即可获的奖励哦~</div>
	  <div class="texttwo" v-show="numnow==3" style="margin: 10px auto;width: 60%;">恭喜您！获得了行行造价提供的一个月行行造价App会员！</div>
	  <div class="texttwo" v-show="numnow==3" style="margin: 10px auto;width: 60%;">会员奖励将在报名阶段结束后发送到您的手机号，请用手机号登录APP进行查收！</div>
	  <div class="textone" v-show="type==2">本次答题：答对<span style="color: #1B97FF;">{{rightnum}}道</span>，答错<span style="color: #FF0D0D;">{{wronnum}}道</span></div>
	  <div class="texttwo" v-show="type==2">得分：{{totalScore}}分，加油！</div>
	  <div class="textthr" v-show="type==3">本次答题</div>
	  <div class="textthr" v-show="type==3">竞速题：答对<span style="color: #1B97FF;">{{cdlist.trueNum}}道</span>，答错<span style="color: #FF0D0D;">{{cdlist.falseNum}}道</span>，得分<span style="color: #FF0D0D;">{{cdlist.totalScore}}分</span></div>
	  <div class="textthr" v-show="type==3">实操题：答对<span style="color: #1B97FF;">{{sclist.trueNum}}道</span>，答错<span style="color: #FF0D0D;">{{sclist.falseNum}}道</span>，得分<span style="color: #FF0D0D;">{{sclist.totalScore}}分</span></div>
	  <div class="texttwo" v-show="type==3">总得分：{{totalScore}}分，加油！</div>
	  <div class="toindex" @click="gotohome()">返回首页</div>
	  <img class="imgtwo" src="../assets/result2.png" />
  </div>
</template>

<script>

export default {
  name: 'result',
  components: {
	  
  },
  data(){
	  return{
		 rightnum:'',
		 wronnum:'',
		 type:'',
		 totalScore:'',
		 type:'',
		 numnow:'',
		 cdlist:{
			 trueNum:0,
			 falseNum:0,
			 totalScore:0
		 },
		 sclist:{
			 trueNum:0,
			 falseNum:0,
			 totalScore:0
		 }
	  }
  },
  created() {
	 this.type=sessionStorage.getItem('type');
  	 this.rightnum=this.$route.params.rightnum;
	 this.wronnum=this.$route.params.wronnum;
	 // this.type=this.$route.params.type;
	 this.totalScore=this.$route.params.totalScore;
	 this.numnow=this.$route.params.numnow;
	 if(this.$route.params.cdlist){
		 this.cdlist=this.$route.params.cdlist; 
		 if(this.cdlist.length==0 ||this.cdlist==null ||this.cdlist==''){
			if(this.cdlist.trueNum){
				 if(this.cdlist.trueNum=='' || this.cdlist.trueNum==null){
					 this.cdlist.trueNum=0
				 }
			}else{
				this.cdlist.trueNum=0
			}
			if(this.cdlist.falseNum){
				if(this.cdlist.falseNum=='' || this.cdlist.falseNum==null){
					 this.cdlist.falseNum=0
				 }
			}else{
				this.cdlist.falseNum=0
			}
			if(this.cdlist.totalScore){
				if(this.cdlist.totalScore=='' || this.cdlist.totalScore==null){
					 this.cdlist.totalScore=0
				 }
			}else{
				this.cdlist.totalScore=0
			} 
		 }
		 
	 }
	 if(this.$route.params.sclist){
		 this.sclist=this.$route.params.sclist;
	 }
  },
  methods:{
	  gotohome(){
		  this.$router.push({
		    name: 'Home',
		  })
	  }
  }
}
</script>
