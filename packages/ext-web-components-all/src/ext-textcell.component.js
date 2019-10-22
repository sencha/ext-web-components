import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtTextcell extends Ext_grid_cell_Text {
    constructor() {
        super ([],[])
        this.xtype = 'textcell';
    }
}
window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(ExtTextcell))
