import { combineReducers } from "redux";
import { fetchProgram } from "./program";


export default combineReducers({
    program: fetchProgram
})