import {handleActions} from 'redux-actions';
import {postLoadStartAction, postLoadFailedAction, postLoadCompleteAction} from 'actions/posts';

const defaultState = {
  items: [],
  loading: false,
};

export default handleActions({
  [postLoadStartAction]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [postLoadCompleteAction]: (state, action) => {
    return {
      ...state,
      loading: false,
      items: action.payload, // payload - информация, которая приходит с экшена
    };
  },
  [postLoadFailedAction]: (state) => {
    return {
      ...state,
      loading: false,
    };
  },
}, defaultState);
