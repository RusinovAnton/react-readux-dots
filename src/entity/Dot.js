import CellItem from './CellItem'

class Dot extends CellItem {
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
