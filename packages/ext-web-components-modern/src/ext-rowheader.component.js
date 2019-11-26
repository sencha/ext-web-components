//import Ext_grid_RowHeader from '@sencha/ext-runtime-base/dist/./Ext/grid/RowHeader.js';
import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRowheader extends Ext_grid_RowHeader {
    constructor() {
        super ([], []);
        this.xtype = 'rowheader';
    }

}
window.customElements.define('ext-rowheader', HTMLParsedElement.withParsedCallback(EWCRowheader));

