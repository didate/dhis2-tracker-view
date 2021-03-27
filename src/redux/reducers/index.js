import { combineReducers } from 'redux';
import { fetchProgram } from './program';
import { fetchTeis } from './trackedEntityInstances'


export default combineReducers({
    program: fetchProgram,
    tei: fetchTeis
})