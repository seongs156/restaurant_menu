import Vue from "vue"
import Vuex from "vuex"
// import todo from "./modules/todo"
import restaurant from "./modules/restaurant"


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pageData: [
    ]
  },
  getters: {
    pageGetter(state) {
      return state.pageData
    }
  },
  modules: {
    // todo,
    restaurant,
  }
})

