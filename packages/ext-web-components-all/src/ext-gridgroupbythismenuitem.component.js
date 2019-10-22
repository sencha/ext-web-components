import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridgroupbythismenuitem extends Ext_grid_menu_GroupByThis {
    constructor() {
        super ([],[])
        this.xtype = 'gridgroupbythismenuitem';
    }
}
window.customElements.define('ext-gridgroupbythismenuitem', HTMLParsedElement.withParsedCallback(ExtGridgroupbythismenuitem))
