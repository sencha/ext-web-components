import Ext_grid_menu_SortAsc_Component from './Ext/grid/menu/SortAsc'

export class ExtGridsortascmenuitemComponent extends Ext_grid_menu_SortAsc_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridsortascmenuitem', ExtGridsortascmenuitemComponent);
    });
})();
