
import { FETCH_TEI, RECEIVE_TEI } from '../types'
import { teisQuery } from './query'

const fetchTeis = (engine, program) => async dispatch => {


    dispatch({
        type: FETCH_TEI
    })

    const { result } = await engine.query(teisQuery(program))

    dispatch({
        type: RECEIVE_TEI,
        payload: result
    })

}

export { fetchTeis }