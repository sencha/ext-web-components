//import Ext_grid_Grid from '@sencha/ext-runtime-base/dist/./Ext/grid/Grid.js';
import Ext_grid_Grid from './Ext/grid/Grid.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGrid extends Ext_grid_Grid {
    constructor() {
        super ([], []);
        this.xtype = 'grid';
    }

}
window.customElements.define('ext-grid', HTMLParsedElement.withParsedCallback(EWCGrid));
import './ElementCell';
