import {
    CELL_CLICK
} from './action.types.js'

export const cellClick = (pos) => {
    return dispatch => {
        dispatch({
            type: CELL_CLICK,
            payload: {
                pos
            }
        });
    }
}
