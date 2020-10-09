<style scoped="scoped">
.body{
  background: #ff6f50;
  overflow: hidden;
}
.headPic{
  width: 100%;
  margin-top: 18px;
}
.videoList{
  position: relative;
  top: -40px;
  padding-bottom: 95px;
}
.videoBox{
  width: 336px;
  height: 320px;
  border-radius: 11px;
  box-shadow: 2px 4px 1px 0px rgba(212, 74, 34, 0.75);
  background: #fff;
  margin: 0 auto;
  font-family: inpin heiti;
  margin-top: 20px;
}
.videoBox:first-child{
  margin-top: 0;
}
.videoBox .author{
  color: #fff;
  background: #D44A22;
  width: 105px;
  line-height: 26px;
  text-align: center;
  font-family: Adobe Heiti Std;
  position: relative;
  top: 23.5px;
  left: -12px;
}
.videoBox .author:after{
  content: '';
  position:absolute;
  font-size: 0;
  width: 0;
  height: 0;
  bottom: 100%;
  left: 0;
  border-style: solid;
  border-width:3px 6px;
  border-color: transparent #AB2800 #AB2800 transparent;
}
.videoBox .author .afterShape{
  position: absolute;
  left: 100%;
  top: 0;
   border-style: solid;
  border-width:13px 5px;
  border-color: transparent  transparent #D44A22 #D44A22;
}
.videoBox .creatTiem{
  color: #8E8E8E;
  font-size: 15px;
  float: right;
  margin-right: 20px;
}
.videoBox .videoMain{
  width: 314px;
  height: 235px;
  margin: 20px auto 0;
}
.videoBox .title{
  color: #666666;
  font-size: 15px;
  line-height: 37px;
  text-align: center;
  border: 1px solid #EAEAEA;
  border-bottom:0 none;
}
.clearFloat:after{content:"";clear:both;display:block;}
.bottomPic1{
  width: 98%;
  position: absolute;
  bottom:27px;
  left: 1%;
}
.bottomPic2{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.videoBox .video{
  height: 194px;
}
.noVideo{
  width: 100%;
  height: 100%;
  background: #EAEAEA;
  padding-top: 70px;
  box-sizing: border-box;
}
.noVideoIcon{
  background: url(../assets/noVideo.png) no-repeat;
  width: 81px;
  height: 61px;
  background-size: 100% 100%;
  margin: 0 auto;
}
.video{
  position: relative;
}
video{
  width: 100%;
  height: 100%;
  max-width:302px;
  max-height: 194px;
}
.hasVideo{
  background: #EAEAEA;
}
.videoMain .playBtn{
   background: url(../assets/videoPlayBtn.png) no-repeat;
    width: 60px;
    height: 60px;
    background-size: 100% 100%;
    position:absolute;
    top: 66px;
    left: 50%;
    margin-left: -30px;
}
.playBtnBox{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<template>
	<div class="body">
		<img class="headPic" src="../assets/spimg3.png" alt="">
    <div class="videoList">
      <div class="videoBox" v-for="(item,index) in videoList">
        <div class="clearFloat">
          <div class="author">{{getNum(index)}} {{item.name}}<div class="afterShape"></div></div>
          <span v-if="item.video" class="creatTiem">{{item.video.creatdate}}</span>
          <span v-else class="creatTiem" style="opacity:0">20000</span>
        </div>
        <div class="videoMain">
          <div v-if="item.video" class="title">{{item.video.font}}</div>
          <div v-else class="title">暂无视频</div>
          <div class="video">
            <div v-if="item.video" class="hasVideo"  v-on:click="stopVedio(index,item.video.vid)">
              <video :src="item.video.url" poster="" :ref="'video'+item.video.vid" controls></video>
              <!-- <div v-if="!item.playing" class="playBtnBox" v-on:click="playVedio(index,item.video.vid)"  :ref="'playBtn'+item.video.vid">
                <div class="playBtn"></div>
              </div> -->
            </div>
            <div v-else class="noVideo">
              <div class="noVideoIcon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="bottomPic2" src="../assets/spimg1.png" alt="">
    <img class="bottomPic1" src="../assets/spimg2.png" alt="">
	</div>
</template>

<script>

export default {
  name: 'result',
  components: {
	  
  },
  data(){
	  return{
      videoList:[]
	  }
  },
  created() {
    this.getVideoList();
  },
  methods:{
    getVideoList(){
      this.axios.get(this.baseurls+'/apply/videoList').then(res =>{
          for(var i=0,length=res.data.data.length;i<length;i++){
            res.data.data[i].playing=false;
          }
          this.videoList=res.data.data;
			}).catch(() =>{
			
			})
    },
    playVedio(index,vid){
      var thisVideo=this.$refs['video'+vid][0];
      thisVideo.play();
      this.videoList[index].playing=true;
    },
    stopVedio(index,vid){
      //  var thisVideo=this.$refs['video'+vid][0];
      //  thisVideo.pause();
      //  this.videoList[index].playing=false;
    },
    getNum(index){
      var indexStr=index+'';
      if(indexStr.length==1){
         return '0'+(index+1);
      }
      else{
        return index+1;
      }
    }
  }
}
</script>
