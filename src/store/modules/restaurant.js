import axios from "axios";
import db from '../../firebase';

axios.defaults.baseURL = process.env.VUE_APP_AXIOS_URL+'api'
export default {
  namespaced: true,
  state: {
    filter: 'all',
    todos: [],
    loginRemember : localStorage.getItem('loginRemember'),
    token: this.loginRemember === 'Y' ? localStorage.getItem('access_token') : sessionStorage.getItem('access_token'),
  },
  mutations: {
    RETRIEVE_TOKEN(state, data) {
      state.loginRemember = data.loginRemember
      state.token = data.token
    },
    ADD_TODO(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false,
      })
    },
    UPDATE_TODO(state, todo) {
      const index = state.todos.findIndex(item => item.id == todo.id)
      state.todos.splice(index, 1, {
        'id': todo.id,
        'title': todo.title,
        'completed': todo.completed,
        'editing': todo.editing,
      })
    },
    DELETE_TODO(state, id) {
      const index = state.todos.findIndex(item => item.id == id)
      state.todos.splice(index, 1)
    },
    CHECK_ALL(state, checked) {
      state.todos.forEach(todo => (todo.completed = checked))
    },
    UPDATE_FILTER(state, filter) {
      state.filter = filter
    },
    CLEAR_COMPLETED(state) {

      state.todos = state.todos.filter(todo => !todo.completed)
    },
    RETRIEVE_TODOS(state, todos){
      state.todos = todos
    },
    CLEAR_TODOS(state) {
      state.todos = []
    }
  },
  actions: {
    clearTodos(context) {
      context.commit('CLEAR_TODOS')
    },
    retrieveTodos(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      axios.get('/todos')
        .then(response => {
          context.commit('RETRIEVE_TODOS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addTodo(context, todo) {
      axios.post('/todos', {
        title: todo.title,
        completed: false,
      })
        .then(response => {
          context.commit('ADD_TODO', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    register(context, restaurant) {
      console.log(restaurant);
      db.collection('restaurant').add({
        'shop': restaurant.shop,
        'breakfast_menu':'',
        'lunch_menu':'',
        'dinner_menu':'',
        'password': restaurant.password,
        'zip': restaurant.zip,
        'address1': restaurant.address1,
        'address2': restaurant.address2,
        'tel': restaurant.tel,
        'breakfastTime':restaurant.breakfastTime,
        'launchTime':restaurant.launchTime,
        'dinnerTime':restaurant.dinnerTime,
        timestamp: new Date(),
      })
        .then(docRef => {
          console.log(docRef);
          // context.commit('addRestaurant',{
          //   id: docRef.id,
            // title: change.doc.data().title,
          // })
        })
      //
      //
      //
      // axios.post('/register', {
      //   'shop': restaurant.shop,
      //   'password': restaurant.password,
      //   'zip': restaurant.zip,
      //   'address1': restaurant.address1,
      //   'address2': restaurant.address2,
      //   'tel': restaurant.tel,
      // })
      //   .then(response => {
      //     context.commit('ADD_TODO', response.data)
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
    updateTodo(context, todo) {
      axios.patch('/todos/' + todo.id, {
        title: todo.title,
        completed: todo.completed,
      })
        .then(response => {
          context.commit('UPDATE_TODO', response.data)
        })
        .catch(error => {
          console.log(error)
        })

    },
    deleteTodo(context, id) {
      axios.delete('/todos/' + id)
        .then(response => {
          context.commit('DELETE_TODO', id)
        })
        .catch(error => {
          console.log(error)
        })

    },
    checkAll(context, checked) {
      axios.patch('/todosCheckAll', {
        completed: checked,
      })
        .then(response => {
          context.commit('CHECK_ALL', checked)
        })
        .catch(error => {
          console.log(error)
        })
      context.commit('checkAll', checked)
    },
    updateFilter(context, filter) {
      context.commit('UPDATE_FILTER', filter)
    },
    clearCompleted(context) {
      const completed = context.state.todos
        .filter(todo => todo.completed)
        .map(todo => todo.id)

      axios.delete('/todosDeleteCompleted', {
        data: {
          todos: completed
        }
      })
        .then(response => {
          context.commit('CLEAR_COMPLETED')
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  getters: {
    remaining(state) {
      return state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0
    },
    todosFiltered(state) {
      if (state.filter == 'all') {
        return state.todos
      } else if (state.filter == 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter == 'completed') {
        return state.todos.filter(todo => todo.completed)
      }
      return state.todos
    },
    showClearCompletedButton(state) {
      return state.todos.filter(todo => todo.completed).length > 0
    },
  }
}
