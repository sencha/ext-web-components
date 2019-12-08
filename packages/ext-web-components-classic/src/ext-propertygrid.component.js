//import Ext_grid_PropertyGrid from '@sencha/ext-runtime-base/dist/./Ext/grid/PropertyGrid.js';
import Ext_grid_PropertyGrid from './Ext/grid/PropertyGrid.js';
import ElementParser from './ElementParser.js';

export default class EWCPropertygrid extends Ext_grid_PropertyGrid {
    constructor() {
        super ([], []);
        this.xtype = 'propertygrid';
    }

}
window.customElements.define('ext-propertygrid', ElementParser.withParsedCallback(EWCPropertygrid));

