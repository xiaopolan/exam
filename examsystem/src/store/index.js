import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
  maxtime:30*60,
  curnum:0,
  getchange:false,
}
export default new Vuex.Store({
  state: state,
  mutations: {
	  updatamax(state,num){
		state.maxtime=num
	  },
	  updatacurnum(state,num){
	  	state.curnum=num
	  },
	  updatachange(state,num){
	  	state.getchange=num
	  }
  },
  actions: {
  },
  modules: {
  }
})
