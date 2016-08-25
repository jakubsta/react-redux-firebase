// @flow

import { last } from 'ramda';
import { initializeApp } from 'firebase';

import { ActionTypes as ItemsActionTypes, setPosts } from '../actions/posts';
import { ActionTypes as PageActionTypes } from '../actions/page';
import { ActionTypes as UserActionTypes, signingUpStarted, signingUpFailure, signingUpSuccess, signingInStarted, signingInFailure, signingInSuccess } from '../actions/user';
import config from '../../config';

export default class Firebase {
  constructor() {
    this.consumedActions = [ ItemsActionTypes.ADD_POST ];

    this.firebaseApp = initializeApp(config);
    this.db = this.firebaseApp.database();
    this.posts = this.db.ref('/posts');
  }

  toMiddleware() {
    return (store) => (dispatch) => {
      this.fetchPosts(store, dispatch);

      return (action) => {
        switch(action.type) {
          case ItemsActionTypes.ADD_POST:
            this.addPost(store, dispatch, action.payload);
            break;

          case PageActionTypes.CHANGE_PAGE_SIZE:
            dispatch(action);
            this.fetchPosts(store, dispatch);
            break;

          case PageActionTypes.CHANGE_TO_NEXT_PAGE:
            this.fetchPosts(store, dispatch, true);
            break;

          case PageActionTypes.CHANGE_TO_FIRST_PAGE:
            this.fetchPosts(store, dispatch);
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

  signUp(store, dispatch, { email, password }) {
    dispatch(signingUpStarted());
    this.firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(
      (user) => dispatch(signingUpSuccess(user)),
      (error) => dispatch(signingUpFailure(error.message)));
  }

  signIn(store, dispatch, { email, password }) {
    dispatch(signingInStarted());
    this.firebaseApp.auth().signInWithEmailAndPassword(email, password).then(
      (user) => dispatch(signingInSuccess(user)),
      (error) => dispatch(signingInFailure(error.message)));
  }

  addPost(store, dispatch, title='') {
    const { user } = store.getState()
    const newPost = {
      title,
      email: user.user.email,
      views: 0,
      likes: 0,
      createdAt: new Date()
    };

    const newPostKey = this.posts.push().key;
    this.posts.update({ [newPostKey]: newPost });
  }

  fetchPosts(store, dispatch, nextPage=false) {
    if(this.query) {
      this.query.off();
    }
    const { posts, page } = store.getState();

    if(nextPage) {
      this.query = this.posts.orderByKey().endAt(last(posts).id).limitToLast(page.size);
    } else {
      this.query = this.posts.orderByKey().limitToLast(page.size);
    }
    this.query.on('value', (items) => {
      let posts = items.val();
      if(posts === null) {
        posts = []
      } else {
        posts = Object.keys(posts).map((id) => {
          return Object.assign(posts[id], { id });
        }).reverse();
      }

      dispatch(setPosts(posts));
    });
  }
};
