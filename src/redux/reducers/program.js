import { FETCH_PROGRAMS, RECEIVE_PROGRAMS } from "../types"


const initialState = {
    data: null,
    loading: true
}

export const fetchProgram = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_PROGRAMS:
            return { ...state, loading: true }
        case RECEIVE_PROGRAMS:
            return { ...state, data: payload, loading: false }
        default:
            return state
    }
}

