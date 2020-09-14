<style scoped="scoped">
	.result{
		background-color: #f6f6f6;
		height: 100vh;
	}
	.phtop{
		width: 100%;
		height: 152px;
		background: url(../assets/paihang6.png) no-repeat;
		background-size: 100% 152px;
		padding-top: 17px;
	}
	.phtop1{
		display: flex;
		flex-direction: row;
		/* justify-content: center; */
		align-items: center;
	}
	.ph1{
		width: 25px;
		height: 22px;
		background: url(../assets/paihang1.png) no-repeat;
		background-size: 25px 22px;
		margin-left: 30%;
	}
	.ph2{
		font-size: 18px;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 16px;
	}
	.lineph{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 21px;
	}
	.lineph>div{
		flex: 1;
	}
	.line1{
		font-size: 16px;
		color: #FFD800;
		line-height: 18px;
		color: #FFFFFF;
	}
	.line2{
		font-size: 15px;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 16px;
	}
	.midimg{
		width: 365px;
		height: 61px;
		background: url(../assets/paihang5.png) no-repeat;
		background-size: 365px 61px;
		margin: -62px auto 0;
		line-height: 61px;
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
	}
	.midtext{
		width: 335px;
		height: 430px;
		background: #FFFFFF;
		box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.14);
		border-radius: 0px 0px 8px 8px;
		margin: 0 auto;
	}
	.mainse{
		display: flex;
		flex-direction: row;
		height: 43px;
		font-size: 15px;
		font-weight: 400;
		color: #474747;
		line-height: 43px;
		border-bottom: 1px solid #EEEEEE;
		padding: 0 50px;
	}
	.mainse>div{
		flex: 1;
	}
	.active{
		border-bottom: 2px solid #32AAFF
	}
	.getph{
		height: 53px;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-bottom: 1px solid #F5F2ED;
	}
	.imgph{
		width: 26px;
		height: 31px;
		background: url(../assets/paihang2.png) no-repeat;
		background-size: 26px 31px;
		margin-left: 19px;
	}
	.pht1{
		font-size: 15px;
		font-weight: 400;
		color: #222222;
		line-height: 14px;
		width: 165px;
		text-align: left;
		margin-left: 51px;
	}
	.pht2{
		font-size: 15px;
		font-weight: 400;
		color: #FEA458;
		line-height: 19px;
	}
	.imgph1{
		width: 26px;
		height: 31px;
		background: url(../assets/paihang3.png) no-repeat;
		background-size: 26px 31px;
		margin-left: 19px;
	}
	.imgph2{
		width: 26px;
		height: 31px;
		background: url(../assets/paihang4.png) no-repeat;
		background-size: 26px 31px;
		margin-left: 19px;
	}
	.imgph3{
		width: 26px;
		height: 31px;
		font-size: 15px;
		color: #343434;
		line-height: 31px;
		margin-left: 19px;
	}
	.pailist{
		overflow: scroll;
		height: 380px;
	}
	.liuyanin{
		box-sizing: border-box;
		padding: 11px 0;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 58px;
		background-color: #FFFFFF;
	}
	.indiv{
		width: 345px;
		height: 35px;
		background: #F5F2ED;
		border-radius: 18px;
		margin: 0 auto;
	}
	.inputliu{
		height: 24px;
		width: 80%;
		background: #F5F2ED;
		border: none;
	}
	.sendBtn{
		display: inline-block;
		width: 50px;
		height: 25px;
		background: #34A2FF;
		border-radius: 13px;
		font-size: 12px;
		font-family: SourceHanSansSC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 25px;
		margin-top: 5px;
	}
	.liuyan{
		height: 380px;
		overflow: scroll;
	}
	.liuyanli{
		padding: 15px ;
		box-sizing: border-box;
		border-bottom: 1px solid #F5F2ED;
	}
	.liuyantop{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.liutx{
		font-size: 13px;
		font-weight: 400;
		color: #292621;
		text-align: left;
		margin-top: 14px;
	}
	.lit1{
		font-size: 13px;
		font-weight: 400;
		color: #555555;
	}
	.lit2{
		font-size: 12px;
		font-weight: 400;
		color: #AAAAAA;
	}
	.imgback{
		width: 30px;
		height: 17px;
		margin-left: 20px;
	}
</style>
<template>
  <div class="result">
	  <div class="phtop">
		  <div class="phtop1">
			  <img class="imgback" src="../assets/back.png" @click="backhome"/>
			  <div class="ph1"></div>
			  <div class="ph2">排行榜</div>
		  </div>
		  <div class="lineph">
			  <div class="line1">
				  <div style="color: #FFD800;font-weight: bold;">{{rank}}</div>
				  <div >排名</div>
			  </div>
			  <div class="line2">{{username}}</div>
			  <div class="line1">
				  <div style="color: #FFD800;font-weight: bold;">{{tkanswer.mark}}</div>
				  <div>分数</div>
			  </div>
		  </div>
	  </div>
	  <div class="midimg">快来留言聊聊“我和我的造价人生”吧</div>
	  <div class="midtext">
		  <div class="mainse">
			  <div :class="{'active':isA}" @click="getchange()">排行榜</div>
			  <div :class="{'active':!isA}" @click="getchange()" style="margin-left: 50px;">留言板</div>
		  </div>
		  <div v-show="isA" class="pailist">
			  <div class="getph" v-for="(item,index) in namelist">
				  <div class="imgph" v-if="index==0"></div>
				  <div class="imgph1" v-else-if="index==1"></div>
				  <div class="imgph2" v-else-if="index==2"></div>
				  <div class="imgph3" v-else>{{index+1}}</div>
				  <div class="pht1">{{item.name}}</div>
				  <div class="pht2">{{item.mark}}</div>
			  </div>
		  </div>
		  <div v-show="!isA">
			  <div class="liuyan">
				  <div class="liuyanli" v-for="(item,index) in liuyanlist">
					  <div class="liuyantop" >
						  <div class="lit1">{{item.name}}</div>
						  <div class="lit2">{{item.createdate}}</div>
					  </div>
					  <div class="liutx">{{item.message}}</div>
				  </div>
			  </div>
			  <div class="liuyanin">
				  <div class="indiv">
					  <input v-model="message" class="inputliu" type="text" placeholder="写评价..."/>
					  <span  class="sendBtn" @click="sentMsg()">发送</span>
				  </div>
			  </div>
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
		 isA:true,
		 namelist:[],
		 tkanswer:{},
		 liuyanlist:[],
		 message:'',
		 rank:'',
		 username:''
	  }
  },
  created() {
	  this.getpaihang();
	  this.getliuyan()
  },
  methods:{
	  backhome(){
	  	this.$router.push({
	  	  name: 'Home',
	  	})
	  },
	  getchange(){
		  this.isA=!this.isA
	  },
	  getpaihang(){
		  var that=this
		  this.axios.get(this.baseurls+'/raking/getRakingList', {
		  	headers:{
		  	    'Authorization':localStorage.getItem('Authorization')
		  	},
		  }).then(res =>{
			that.namelist=res.data.data;
			if(res.data.resultData.tkanswer != null){
				that.tkanswer=res.data.resultData.tkanswer;
			}
			that.rank=res.data.resultData.rank;
			that.username=res.data.resultData.username;
		  }).catch(() =>{
		  
		  })
	  },
	  getliuyan(){
		  var that=this
		  this.axios.get(this.baseurls+'/raking/getMessage', {
		  	headers:{
		  	    'Authorization':localStorage.getItem('Authorization')
		  	},
		  }).then(res =>{
			that.liuyanlist=res.data.data
		  }).catch(() =>{
		  
		  })
	  },
	  sentMsg(){
		  var that=this
		  this.axios.get(this.baseurls+'/raking/addMessage', {
		  	headers:{
		  	    'Authorization':localStorage.getItem('Authorization')
		  	},
			params:{
				message:that.message
			}
		  }).then(res =>{
		  	that.message=''
			that.getliuyan()
		  }).catch(() =>{
		  
		  })
	  }
  }
}
</script>
