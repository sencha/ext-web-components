//import Ext_grid_cell_Text from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Text.js';
import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTextcell extends Ext_grid_cell_Text {
    constructor() {
        super ([], []);
        this.xtype = 'textcell';
    }

}
window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(EWCTextcell));

