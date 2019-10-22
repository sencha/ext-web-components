import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRowheader extends Ext_grid_RowHeader {
    constructor() {
        super ([],[])
        this.xtype = 'rowheader';
    }
}
window.customElements.define('ext-rowheader', HTMLParsedElement.withParsedCallback(ExtRowheader))
