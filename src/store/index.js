import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    movies: [],
  },
  mutations: {
    Get_USERS_LIST(state) {
      const url = 'https://jsonplaceholder.typicode.com/users';
      axios.get(url).then((resp) => {
        state.users = resp.data;
      },
      (error) => {
        console.log(error);
      })
    },
    Get_MOVIES_LIST(state, string) {
      const url = 'http://www.omdbapi.com/';
      const params = {
        params: {
          apikey: 'ece5ea60',
          t: string,
          s: string,
          type: 'movie',
          page: 1,
        }
      }
      axios.get(url, params).then((resp) => {
        state.movies = resp.data && resp.data.Search || [];
      },
      (error) => {
        console.log(error);
      })
    },
    Set_USER(state, user) {
      let currenntUser = state.users.filter(usr => usr.username === user) || [];
      if (currenntUser && currenntUser.length) {
        state.user = currenntUser[0];
        router.push('/app')
      } else {
        currenntUser = '';
        router.push('/login')
        alert('Please enter a valid username!')
      }
      localStorage.setItem('user', JSON.stringify(currenntUser[0]));
    },
    SET_EXISTENT_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    GetUsers({commit}) {
      commit('Get_USERS_LIST');
    },
    SetUser({commit}, user) {
      commit('Set_USER', user);
    },
    GetMovies({commit}, string) {
      commit('Get_MOVIES_LIST', string);
    },
    SetExistentUser({commit}, user) {
      commit('SET_EXISTENT_USER', user);
    }
  },
  modules: {
  }
})
