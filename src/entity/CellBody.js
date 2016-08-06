import {
    TYPE_BUBBLE
} from './cellBody.types.js'

class CellBody {
    constructor({type,name,shape,interactive}) {
        this.name = name;
        this.type = type || TYPE_BUBBLE;
        this.shape = shape;
        this.interactive = interactive || {
            clickable: true,
            fallable: true
        }
    }
}

export default CellBody
