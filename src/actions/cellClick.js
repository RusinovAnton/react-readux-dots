import {
    CELL_CLICK
} from './action.types.js'

export default (pos) => {
    dispatch({
        type: CELL_CLICK,
        payload: {
            pos
        }
    })
}
