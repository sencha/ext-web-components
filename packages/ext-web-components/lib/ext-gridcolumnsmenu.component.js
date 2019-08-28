import Ext_grid_menu_Columns_Component from './Ext/grid/menu/Columns'

export class ExtGridcolumnsmenuComponent extends Ext_grid_menu_Columns_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridcolumnsmenu', ExtGridcolumnsmenuComponent);
    });
})();
