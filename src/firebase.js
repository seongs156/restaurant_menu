import firebase from 'firebase'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyCnmW54IVKFOKe58RtU08fYjj0Gjn5OVk4",
  authDomain: "baro-menu.firebaseapp.com",
  databaseURL: "https://baro-menu.firebaseio.com",
  projectId: "baro-menu",
  storageBucket: "baro-menu.appspot.com",
  messagingSenderId: "584500905624",
  appId: "1:584500905624:web:0c04952a70addb4d3932ed",
  measurementId: "G-8H9MCVBRRN"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebase.firestore()

// firestore.settings({ timestampsInSnapshots: true })

export default firestore
