//import Ext_pivot_Row from '@sencha/ext-runtime-base/dist/./Ext/pivot/Row.js';
import Ext_pivot_Row from './Ext/pivot/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPivotgridrow extends Ext_pivot_Row {
    constructor() {
        super ([], []);
        this.xtype = 'pivotgridrow';
    }

}
window.customElements.define('ext-pivotgridrow', HTMLParsedElement.withParsedCallback(EWCPivotgridrow));

