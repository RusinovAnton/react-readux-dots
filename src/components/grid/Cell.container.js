import Cell from './Cell.component'
import {connect} from 'react-redux'
import {
    cellClick
} from '../../actions'

export default connect(
    null,
    {
        onCellClick: cellClick
    }
)(Cell)
