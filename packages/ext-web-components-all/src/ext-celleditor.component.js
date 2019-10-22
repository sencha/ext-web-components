import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCelleditor extends Ext_grid_CellEditor {
    constructor() {
        super ([],[])
        this.xtype = 'celleditor';
    }
}
window.customElements.define('ext-celleditor', HTMLParsedElement.withParsedCallback(ExtCelleditor))
