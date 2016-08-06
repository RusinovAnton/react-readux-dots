import CellBody from './CellBody'

class Dot extends CellBody {
	constructor(color) {
        super({
            type: 'TYPE_BUBBLE',
            name: 'dot',
            shape: 'circle'
        });

		this.color = color;
		this.link = this.color.toString().replace(/#/, '__') + '__';

	}

}

export default Dot
