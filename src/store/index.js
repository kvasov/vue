import { createStore } from 'vuex';
import { postModule } from './postModule';

export default createStore({
  state: {
    likes: 0,
  },
  getters: {
    doubleLikes(state) {
      return state.likes * 2;
    },
  },
  mutations: {
    increment(state) {
      state.likes += 1;
    },
    decrement(state) {
      state.likes -= 1;
    },
  },
  actions: {},
  modules: {
    post: postModule,
  },
});
