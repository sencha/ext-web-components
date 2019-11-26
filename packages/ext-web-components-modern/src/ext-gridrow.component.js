//import Ext_grid_Row from '@sencha/ext-runtime-base/dist/./Ext/grid/Row.js';
import Ext_grid_Row from './Ext/grid/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGridrow extends Ext_grid_Row {
    constructor() {
        super ([], []);
        this.xtype = 'gridrow';
    }

}
window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(EWCGridrow));

