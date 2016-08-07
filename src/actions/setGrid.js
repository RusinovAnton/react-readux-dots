import { SET_GRID } from './action.types'
import Game from '../entity/Game'

export const setGrid = ({size, scheme}) => {
    return dispatch => {
        dispatch({
            type: SET_GRID,
            payload: {
                game: new Game({ size, scheme })
            }
        })
    }
}
