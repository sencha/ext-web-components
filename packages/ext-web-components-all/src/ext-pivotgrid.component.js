import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivotgrid extends Ext_pivot_Grid {
    constructor() {
        super ([],[])
        this.xtype = 'pivotgrid';
    }
}
window.customElements.define('ext-pivotgrid', HTMLParsedElement.withParsedCallback(ExtPivotgrid))
