import Ext_grid_menu_GroupByThis_Component from './Ext/grid/menu/GroupByThis'

export class ExtGridgroupbythismenuitemComponent extends Ext_grid_menu_GroupByThis_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridgroupbythismenuitem', ExtGridgroupbythismenuitemComponent);
    });
})();
