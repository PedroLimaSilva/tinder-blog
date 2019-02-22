import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyAjCDirfb9Ia_qlKR3uGYvrBZBf9nSbotY",
  authDomain: "blog-lgbt.firebaseapp.com",
  databaseURL: "https://blog-lgbt.firebaseio.com",
  projectId: "blog-lgbt",
  storageBucket: "blog-lgbt.appspot.com",
  messagingSenderId: "707077454956"
};
firebase.initializeApp(config);
export default firebase;

export const ArticlesCollection = firebase.firestore().collection('articles');