import Vue from "vue";
import Vuex from "vuex";
import firebase from "~/plugins/firebase";
import { firebaseMutations, firebaseAction } from "vuexfire";
const db = firebase.database();
const chatsRef = db.ref("/chats");
const hogeRef = db.ref("/hoge");

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      filterParams: "",
      chats: []
    },
    getters: {
      chats: state => {
        return state.chats;
      },
      filterParams: state => {
        return state.filterParams;
      }
    },
    mutations: {
      setFilterParams(state, { filterParams }) {
        state.filterParams = filterParams;
      },
      ...firebaseMutations
    },
    actions: {
      INIT_CHATS: firebaseAction(({ bindFirebaseRef }) => {
        bindFirebaseRef("chats", chatsRef);
      }),
      SET_FILTER: firebaseAction(
        ({ commit, bindFirebaseRef, unbindFirebaseRef }, { filterParams }) => {
          unbindFirebaseRef("chats");
          bindFirebaseRef(
            "chats",
            chatsRef.orderByChild(filterParams).equalTo(true)
          );
          commit("setFilterParams", { filterParams });
        }
      )
    }
  });
};

export default createStore;
