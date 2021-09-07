  
import { combineReducers } from "redux";
import authencationReducers from "./authencationReducers";
import filterReducer from "./filterReducer";

export default combineReducers({
    authencationResponse: authencationReducers,
    filterResponse: filterReducer
   
        
});