//import Ext_grid_menu_ShowInGroups from '@sencha/ext-runtime-base/dist/./Ext/grid/menu/ShowInGroups.js';
import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCGridshowingroupsmenuitem extends Ext_grid_menu_ShowInGroups {
    constructor() {
        super ([], []);
        this.xtype = 'gridshowingroupsmenuitem';
    }

}
window.customElements.define('ext-gridshowingroupsmenuitem', HTMLParsedElement.withParsedCallback(EWCGridshowingroupsmenuitem));

