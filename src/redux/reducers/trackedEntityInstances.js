import { FETCH_TEI, RECEIVE_TEI } from "../types"


const initialState = {
    data: null,
    loading: true
}

export const fetchTeis = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_TEI:
            return { ...state, loading: true }
        case RECEIVE_TEI:
            return { ...state, data: payload, loading: false }
        default:
            return state
    }
}
