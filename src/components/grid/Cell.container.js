import Cell from './Cell.component'
import {bindActionCreator} from 'redux'
import {connect} from 'react-redux'
import {
    cellClick
} from '../../actions'

export default connect(
    null,
    {
        onClick: dispatch => {
            bindActionCreator(cellClick, dispatch)
        }
    }
)(Cell)
