//import Ext_grid_RowEditorButtons from '@sencha/ext-runtime-base/dist/./Ext/grid/RowEditorButtons.js';
import Ext_grid_RowEditorButtons from './Ext/grid/RowEditorButtons.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditorbuttons extends Ext_grid_RowEditorButtons {
    constructor() {
        super ([], []);
        this.xtype = 'roweditorbuttons';
    }

}
window.customElements.define('ext-roweditorbuttons', ElementParser.withParsedCallback(EWCRoweditorbuttons));

