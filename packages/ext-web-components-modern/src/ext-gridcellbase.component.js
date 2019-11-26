//import Ext_grid_cell_Base from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Base.js';
import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGridcellbase extends Ext_grid_cell_Base {
    constructor() {
        super ([], []);
        this.xtype = 'gridcellbase';
    }

}
window.customElements.define('ext-gridcellbase', HTMLParsedElement.withParsedCallback(EWCGridcellbase));

