import Ext_pivot_Row from './Ext/pivot/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotgridrow extends Ext_pivot_Row {
    constructor() {
        super ([],[])
        this.xtype = 'pivotgridrow';
    }
}
window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(ExtPivotgridrow))
