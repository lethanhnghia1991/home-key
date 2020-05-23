/*
 *
 * MotelPage reducer
 *
 */
import produce from 'immer';
import { GET_MOTEL_SUCCESS, GET_MOTEL_FAIL } from './constants';

export const initialState = {
  motel: {},
};

/* eslint-disable default-case, no-param-reassign */
const motelPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MOTEL_SUCCESS:
        draft.motel = action.response;
        break;
      case GET_MOTEL_FAIL:
        draft.motel = action.error;
        break;
    }
  });

export default motelPageReducer;
