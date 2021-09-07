import {FILTER_CLICK} from './types';

export const filterClicked = (showModal) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_CLICK,
      payload: showModal,
    });
  };
};
