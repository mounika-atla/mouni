import { combineReducers,createStore } from "redux"; 
import todoReducer from "../reducers/todoreducer";
var store=createStore(combineReducers(
    {todolist:todoReducer}
));
export default store; 