// @flow

import { createAction } from 'redux-actions';

export const fetchPostsIfNotAvailable = createAction('FETCH_POSTS_IF_NOT_AVAILABLE');
export const addPost = createAction('ADD_POST');
export const editPost = createAction('EDIT_POST');
export const setPosts = createAction('SET_POSTS');
export const likePost = createAction('LIKE_POST');
