// @flow

import { initializeApp } from 'firebase';

import ActionTypes from '../actions/types';
import { setItems } from '../actions/items';
import config from '../../config';

export default class Firebase {
  constructor() {
    this.consumedActions = [ ActionTypes.ADD_ITEM ];

    this.firebaseApp = initializeApp(config);
    this.db = this.firebaseApp.database();
    this.posts = this.db.ref('/posts');
  }

  toMiddleware() {
    return (store) => (dispatch) => {
      
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

      return (action) => {
        if (this.consumedActions.indexOf(action.type) > -1) {
          this.addPost(action.payload)
        } else {
          dispatch(action);
        }
      };
    }
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
};
