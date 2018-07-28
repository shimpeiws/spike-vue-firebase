import Vue from "vue";
import Vuex from "vuex";
import firebase from "~/plugins/firebase";
import { firebaseMutations, firebaseAction } from "vuexfire";
const db = firebase.database();
const chatsRef = db.ref("/chats");

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      chats: []
    },
    mutations: {
      ...firebaseMutations
    },
    actions: {
      INIT_CHATS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef("chats", chatsRef);
      })
    }
  });
};

export default createStore;
