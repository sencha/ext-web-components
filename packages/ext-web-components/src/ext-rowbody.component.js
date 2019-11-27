//import Ext_grid_RowBody from '@sencha/ext-runtime-base/dist/./Ext/grid/RowBody.js';
import Ext_grid_RowBody from './Ext/grid/RowBody.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRowbody extends Ext_grid_RowBody {
    constructor() {
        super ([], []);
        this.xtype = 'rowbody';
    }

}
window.customElements.define('ext-rowbody', HTMLParsedElement.withParsedCallback(EWCRowbody));

