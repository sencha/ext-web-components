//import Ext_grid_View from '@sencha/ext-runtime-base/dist/./Ext/grid/View.js';
import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './ElementParser.js';

export default class EWCTableview extends Ext_grid_View {
    constructor() {
        super ([], []);
        this.xtype = 'tableview';
    }

}
window.customElements.define('ext-tableview', ElementParser.withParsedCallback(EWCTableview));

