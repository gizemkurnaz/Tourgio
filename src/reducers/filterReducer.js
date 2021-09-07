import {FILTER_CLICK} from "../actions/types";
const INITIAL_STATE = {
  showModal : false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FILTER_CLICK:
            return {...state,showModal:action.payload};

            default:
                return state;
    }

};