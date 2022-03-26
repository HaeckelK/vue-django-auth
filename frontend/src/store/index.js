import { createStore } from 'vuex';
import {
  LOGOUT,
  SET_CSRF_TOKEN,
  REMOVE_CSRF_TOKEN,
  SET_USERNAME,
  REMOVE_USERNAME,
  SET_PASSWORD,
  REMOVE_PASSWORD,
} from './types';
import auth from '../api/auth';

export default createStore({
  state: {
    isAuthenticated: false,
    csrfToken: 'this is set be default in store',
    username: '',
    password: '',
  },
  getters: {
  },
  mutations: {
    [LOGOUT](state) {
      state.isAuthenticated = false;
    },
    [SET_CSRF_TOKEN](state, token) {
      state.csrfToken = token;
      // TODO: Can this be stored in local?
    },
    [REMOVE_CSRF_TOKEN](state) {
      state.csrfToken = '';
    },
    [SET_USERNAME](state, username) {
      state.username = username;
    },
    [REMOVE_USERNAME](state) {
      state.username = '';
    },
    [SET_PASSWORD](state, password) {
      state.password = password;
    },
    [REMOVE_PASSWORD](state) {
      // TODO: Does PW need storing?
      state.password = '';
    },
  },
  actions: {
    getCSRF({ commit }) {
      // I've probably convoluted this a bit by using a callback? But I need the auth area to make the 
      // API call to keep API setup in one place.
      auth.getCSRFToken(commit, SET_CSRF_TOKEN);
    },
    logout({ commit }) {
      auth.logout();
      commit(LOGOUT);
      commit(REMOVE_CSRF_TOKEN);
      commit(REMOVE_USERNAME);
      commit(REMOVE_PASSWORD);
      // return auth.logout()
      //   .then(() => commit(LOGOUT))
      //   .finally(() => commit(REMOVE_CSRF_TOKEN));
    },
  },
  modules: {
  },
});
