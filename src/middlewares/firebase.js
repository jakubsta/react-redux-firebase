// @flow

import { last } from 'ramda';
import { initializeApp } from 'firebase';

import * as PostsActions from '../actions/posts';
import * as PageActions from '../actions/page';
import * as UserActions from '../actions/user';
import config from '../../config';

export default class Firebase {
  constructor() {
    this.firebaseApp = initializeApp(config);
    this.db = this.firebaseApp.database();
    this.posts = this.db.ref('/posts');
  }

  toMiddleware() {
    return (store) => (dispatch) => (action) => {
      switch (action.type) {
        case `${PostsActions.fetchPostsIfNotAvailable}`:
          this.fetchPosts(store, dispatch);
          break;
        case `${PostsActions.addPost}`:
          this.addPost(store, dispatch, action.payload);
          break;

        case `${PostsActions.likePost}`:
          this.likePost(store, action.payload);
          break;

        case `${PageActions.changePageSize}`:
          dispatch(action);
          this.fetchPosts(store, dispatch);
          break;

        case `${PageActions.changeToNextPage}`:
          this.fetchPosts(store, dispatch, true);
          break;

        case `${PageActions.changeToFirstPage}`:
          this.fetchPosts(store, dispatch);
          break;

        case `${UserActions.signUp}`:
          this.signUp(store, dispatch, action.payload);
          break;

        case `${UserActions.signIn}`:
          this.signIn(store, dispatch, action.payload);
          break;

        default:
          dispatch(action);
      }
    };
  }

  signUp(store, dispatch, { email, password }) {
    dispatch(UserActions.signingUpStarted());
    this.firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(
      (user) => dispatch(UserActions.signingUpSuccess(user)),
      (error) => dispatch(UserActions.signingUpFailure(error.message)));
  }

  signIn(store, dispatch, { email, password }) {
    dispatch(UserActions.signingInStarted());
    this.firebaseApp.auth().signInWithEmailAndPassword(email, password).then(
      (user) => dispatch(UserActions.signingInSuccess(user)),
      (error) => dispatch(UserActions.signingInFailure(error.message)));
  }

  addPost(store, dispatch, title = '') {
    const { user } = store.getState();
    const newPost = {
      title,
      email: user.user.email,
      viewsCount: 0,
      views: {},
      likesCount: 0,
      likes: {},
      createdAt: new Date(),
    };

    const newPostKey = this.posts.push().key;
    this.posts.update({ [newPostKey]: newPost });
  }

  likePost(store, postId) {
    const { user } = store.getState();
    const uid = user.user.uid;
    this.modifyCounter(uid, 'posts', postId, 'likes',
      (post) => {
        const newPost = { ...post };
        newPost.likesCount--;
        newPost.likes[uid] = null;

        return newPost;
      },
      (post) => {
        const newPost = { ...post };
        newPost.likesCount++;
        if (!newPost.likes) {
          newPost.likes = {};
        }
        newPost.likes[uid] = true;

        return newPost;
      });
  }

  fetchPosts(store, dispatch, nextPage = false) {
    if (this.query) {
      this.query.off();
    }
    const { posts, page } = store.getState();

    if (nextPage) {
      this.query = this.posts.orderByKey().endAt(last(posts).id).limitToLast(page.size);
    } else {
      this.query = this.posts.orderByKey().limitToLast(page.size);
    }
    this.query.on('value', (snapshot) => {
      let newPosts = snapshot.val();
      if (newPosts === null) {
        newPosts = [];
      } else {
        newPosts = Object.keys(newPosts).map((id) => ({ ...newPosts[id], id })).reverse();

        // newPosts.forEach(({ id }) => this.markAsShown(store, id));
      }

      dispatch(PostsActions.setPosts(newPosts));
    });
  }

  markAsShown(store, postId) {
    const { user } = store.getState();
    const uid = user.user.uid;
    this.modifyCounter(uid, 'posts', postId, 'views',
      () => {},
      (post) => {
        const newPost = { ...post };
        newPost.likesCount++;
        if (!newPost.views) {
          newPost.views = {};
        }
        newPost.views[uid] = true;

        return newPost;
      });
  }

  modifyCounter(uid, collection, id, field, onDecrement, onIncrement) {
    this.db.ref(`/${collection}/${id}`).transaction((entity) => {
      if (entity) {
        if (entity[`${field}Count`] && entity[field][uid]) {
          return onDecrement(entity);
        }
        return onIncrement(entity);
      }
      return entity;
    });
  }
}
