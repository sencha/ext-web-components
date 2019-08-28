import Ext_grid_menu_SortDesc_Component from './Ext/grid/menu/SortDesc'

export class ExtGridsortdescmenuitemComponent extends Ext_grid_menu_SortDesc_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridsortdescmenuitem', ExtGridsortdescmenuitemComponent);
    });
})();
