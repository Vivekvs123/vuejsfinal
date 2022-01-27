import Vue from 'vue';
import Vuex from 'vuex'; 
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
      inCart:JSON.parse(localStorage.getItem('myCart'))?JSON.parse(localStorage.getItem('myCart')):[]
  },
  getters:{
     inCart: state => state.inCart
  },
  mutations:{
    addToCart(state,id)
     {
        state.inCart.push(id)
      },
       
    deleteCart(state,id){
      state.inCart.splice(id,1)
  }
  },
  actions:{
      addToCart(context,id) { context.commit('addToCart',id)}
  }
})