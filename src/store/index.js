import { createStore } from 'vuex'

export default createStore({
  state: {
    user:'',
    users:[],
    fundraiser:[]
  },
  getters: {
    user:state=>{
      if(state.user===null){
        return JSON.parse(localStorage.getItem('user'))
      }
      return state.user
    },
    access:(state,getters)=>getters?.user?.access
  },
  mutations: {
    setUsre(state, user){
      state.user= user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    login(state, user){
      state.user=user;
      localStorage.setItem('user',state.user);
    },
    logout(state){
      state.user=null;
      localStorage.removeItem('user');
    },
    initializeStore(state){
      if(localStorage.getItem('user')){
        state.user=JSON.parse(localStorage.getItem('user'));
      }else{
        this.commit("logout");
      }
    }
  },
  actions: {
    login({commit},userData){
      return new Promise((resolve, reject)=>{
        this.axios
        .post('login/',userData)
        .then((response)=>{
          commit("login",response.data);
          resolve(response.data);
        })
        .catch((error)=>{
          console.log(error);
          reject(error);
        })
      })
    }
  },
  modules: {
  }
})
