import firebase from 'firebase';

class User {
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log(state.user)
    },
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      commit('setUser', new User(user.user.uid));
    },
    async loginUser({ commit }, { email, password }) {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      commit('setUser', new User(user.user.uid));
    },
    autoLoginUser({ commit }, payload) {
      commit('setUser', new User(payload.uid));
    },
    logoutUser({commit}) {
      firebase.auth().signOut();
      commit('setUser', null);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isUserLoggedIn(state) {
      return state.user !== null;
    }
  },
};
