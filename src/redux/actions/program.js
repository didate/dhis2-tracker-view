
import { FETCH_PROGRAMS, RECEIVE_PROGRAMS } from '../types'
import { programsQuery } from './query'

const fetchProgram = (engine) => async dispatch => {

    dispatch({
        type: FETCH_PROGRAMS
    })

    const { result } = await engine.query(programsQuery);

    const programs = [{ label: '', value: 'none' }]

    if (result) {
        result.programs.forEach(program => {
            programs.push({
                value: program.id, label: program.displayName
            })
        });
    }

    dispatch({
        type: RECEIVE_PROGRAMS,
        payload: programs
    })

}

export { fetchProgram }