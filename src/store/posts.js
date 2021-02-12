export default {
  state: {
    posts: [],
  },
  mutations: {
    createPost(state, payload) {
      state.posts.push(payload);
      console.log(state)
    },
  },
  actions: {
    createPost({ commit }, payload) {
      commit('createPost', payload);
    },
  },
  getters: {
    myPosts(state) {
      return state.posts;
    }
  },
};
