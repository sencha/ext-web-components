import Ext_grid_Row from './Ext/grid/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridrow extends Ext_grid_Row {
    constructor() {
        super ([],[])
        this.xtype = 'gridrow';
    }
}
window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(ExtGridrow))
