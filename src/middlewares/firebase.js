// @flow

import { initializeApp } from 'firebase';

import { ActionTypes as ItemsActionTypes, setItems } from '../actions/items';
import { ActionTypes as UserActionTypes } from '../actions/user';
import config from '../../config';

export default class Firebase {
  constructor() {
    this.consumedActions = [ ItemsActionTypes.ADD_ITEM ];

    this.firebaseApp = initializeApp(config);
    this.db = this.firebaseApp.database();
    this.posts = this.db.ref('/posts');
  }

  toMiddleware() {
    return (store) => (dispatch) => {
      this.fetchPosts(store, dispatch);

      return (action) => {
        switch(action.type) {
          case ItemsActionTypes.ADD_ITEM:
            this.addPost(action.payload);
            break;

          case UserActionTypes.SIGN_UP:
            this.signUp(store, dispatch, action.payload);
            break;
  
          case UserActionTypes.SIGN_IN:
            this.signIn(store, dispatch, action.payload);
            break;

          default:
            dispatch(action);
        }
      };
    };
  }

  signUp(store, dispath, { email, password }) {
    this.firebaseApp.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
  }

  signIn(store, dispath, { email, password }) {
    this.firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
  }

  addPost(title='', username='Admin') {
    const newPost = {
      title,
      username,
      views: 0,
      likes: 0,
      createdAt: new Date()
    };

    const newPostKey = this.posts.push().key;
    this.posts.update({ [newPostKey]: newPost });
  }

  fetchPosts(store, dispatch) {
    const { items } = store.getState();

    this.query = this.posts.orderByKey().limitToLast(10);
    this.query.on('value', (items) => {
      let posts = items.val();
      if(posts === null) {
        posts = []
      } else {
        posts = Object.keys(posts).map((id) => {
          return Object.assign(posts[id], { id });
        }).reverse();
      }

      dispatch(setItems(posts));
    });
  }
};
