import {createAction} from 'redux-actions';

export const postLoadAction = (dispatch) => {
  dispatch(postLoadStartAction());
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        dispatch(postLoadCompleteAction(posts));
      })
      .catch(() => {
        dispatch(postLoadFailedAction());
      });
};

export const postLoadStartAction = createAction('[Posts] LoadStart');
export const postLoadCompleteAction = createAction('[Posts] LoadComplete');
export const postLoadFailedAction = createAction('[Posts] LoadFailed');
