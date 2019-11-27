//import Ext_grid_CellEditor from '@sencha/ext-runtime-base/dist/./Ext/grid/CellEditor.js';
import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCCelleditor extends Ext_grid_CellEditor {
    constructor() {
        super ([], []);
        this.xtype = 'celleditor';
    }

}
window.customElements.define('ext-celleditor', HTMLParsedElement.withParsedCallback(EWCCelleditor));

