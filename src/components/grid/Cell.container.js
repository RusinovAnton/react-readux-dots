import Cell from './Cell.component'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    cellClick
} from '../../actions'

export default connect(
    null,
    {
        onClick: cellClick
    }
)(Cell)
