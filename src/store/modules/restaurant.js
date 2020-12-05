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
    restaurants: []
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
    },
    RETRIEVE_RESTAURANTS(state, restaurants){
      state.restaurants = restaurants
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
    addMenu(context, menu) {
      var message;
      return new Promise((resolve, reject) => {
        db.collection('restaurant').doc(menu.id).set({
        breakfastMenu : menu.breakfastMenu,
        lunchMenu : menu.lunchMenu,
        dinnerMenu : menu.dinnerMenu,
        timestamp : menu.timestamp,
        // timestamp: new Date(),
      }, { merge:true })
        .then(response => {
          message = true;
          resolve(message);
          // console.log(response);
        }).catch(function(error) {
          message = false
          reject(message);
          // console.log("Error getting document:", error);
        });
      });
    },
    register(context, restaurant) {
      // console.log(restaurant);
      var message;
      return new Promise((resolve, reject) => {
        db.collection('restaurant').add({
          'shop': restaurant.shop,
          'shopCode': restaurant.shopCode,
          'breakfastMenu': '',
          'lunchMenu': '',
          'dinnerMenu': '',
          'password': restaurant.password,
          'zip': restaurant.zip,
          'address1': restaurant.address1,
          'address2': restaurant.address2,
          'tel': restaurant.tel,
          'breakfastTime': restaurant.breakfastTime,
          'launchTime': restaurant.launchTime,
          'dinnerTime': restaurant.dinnerTime,
          timestamp: new Date(),
        })
          .then(docRef => {
            if (docRef.id) {
              message = true;
              resolve(message);
            } else {
              message = false;
              resolve(message);
            }
          })
      });
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
    retrieveMenus(context,id) {
      var message = false;
      var docRef = db.collection("restaurant").doc(id);
      return new Promise((resolve, reject) => {

        docRef.get().then(function(doc) {
          if (doc.exists) {
            message = true;
            resolve({
              message:message,
              data: doc.data()
            });
          } else {
            // doc.data() will be undefined in this case
            resolve({
              message:message,
            });
          }
        }).catch(function(error) {
          console.log("Error getting document:", error);
        });
      });







      // var message = false;
      //   db.collection('todos').doc(id).get().then(function(doc) {
      //     if (doc.exists) {
      //       console.log("Document data:", doc.data());
      //     } else {
      //       // doc.data() will be undefined in this case
      //       console.log("No such document!");
      //     }
      //   }).catch(function(error) {
      //     console.log("Error getting document:", error);
      //   });
      // });

    },
    shopCodeSelect(context,shopCode) {
      var message = false;
      return new Promise((resolve, reject) => {
        db.collection("restaurant").where("shopCode", "==", shopCode)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              if(doc.id){
                message = true;
              }
              resolve({
                message:message,
                id:doc.id,
                data: doc.data()
              });
            });
            if(!message){
              resolve({
                message:message,
              });
            }
          })
          .catch(function (error) {
            console.log(11);
            reject(error);
            // console.log("Error getting documents: ", error);
          });
      });

    },
    retrieveRestaurant(context){
      context.state.loading = true
      db.collection('restaurant').get()
        .then(querySnapshot => {
          let tempRestaurants = []
          querySnapshot.forEach(doc =>{
            // console.log(doc.data())
            var timestamp = doc.data().timestamp.seconds * 1000;
            var shopDate = new Date(timestamp);
            var nowDate = new Date();
            var shopDateConvert =  shopDate.getFullYear()+'-'+(shopDate.getMonth()+1)+'-'+shopDate.getDate();
            var nowDateConvert =  nowDate.getFullYear()+'-'+(nowDate.getMonth()+1)+'-'+nowDate.getDate();
            var dateUpdate;

            if(nowDateConvert == shopDateConvert){
               dateUpdate = true;
            } else {
              dateUpdate = false;
            }
            const data = {
              id: doc.id,
              shop: doc.data().shop,
              address1: doc.data().address1,
              address2: doc.data().address2,
              shopCode: doc.data().shopCode,
              password: doc.data().password,
              zip: doc.data().zip,
              tel: doc.data().tel,
              breakfastTime:doc.data().breakfastTime,
              launchTime:doc.data().launchTime,
              dinnerTime:doc.data().dinnerTime,
              breakfastMenu:doc.data().breakfastMenu,
              lunchMenu:doc.data().lunchMenu,
              dinnerMenu:doc.data().dinnerMenu,
              timestamp: doc.data().timestamp,
              dateUpdate: dateUpdate
            }
            tempRestaurants.push(data)
          })
          context.state.loading = false
          const tempRestaurantSorted = tempRestaurants.sort((a,b) => {

            return a.timestamp.seconds - b.timestamp.seconds
          })

          context.commit('RETRIEVE_RESTAURANTS', tempRestaurantSorted)
        })
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
      return state.restaurants
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
    idRemaining(state,id) {
      console.log(id);
      // return state.restaurants
    },
  }
}
