import {
    SET_GRID,
    CELL_CLICK
} from '../actions/action.types'

// import {
//     Record,
//     List
// } from 'immutable'

const reduceCellClick = (state, {pos}) => {
    state.setCell(pos, null);
    return state;
}

export const game = (state = {}, action) => {
    switch(action.type) {
        case SET_GRID:
            return action.payload.game;
        case CELL_CLICK:
            return reduceCellClick(state, action.payload);
        default:
            return state;
    }
}
