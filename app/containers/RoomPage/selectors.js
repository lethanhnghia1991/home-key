import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the roomPage state domain
 */

const selectRoomPageDomain = state => state.roomPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by RoomPage
 */

const makeSelectRoomPage = () =>
  createSelector(
    selectRoomPageDomain,
    substate => substate,
  );

export default makeSelectRoomPage;
export { selectRoomPageDomain };
