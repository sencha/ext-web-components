//import Ext_grid_menu_GroupByThis from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/GroupByThis.js';
import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGridgroupbythismenuitem extends Ext_grid_menu_GroupByThis {
    constructor() {
        super ([], []);
        this.xtype = 'gridgroupbythismenuitem';
    }

}
window.customElements.define('ext-gridgroupbythismenuitem', HTMLParsedElement.withParsedCallback(EWCGridgroupbythismenuitem));

