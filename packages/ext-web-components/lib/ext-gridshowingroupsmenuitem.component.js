import Ext_grid_menu_ShowInGroups_Component from './Ext/grid/menu/ShowInGroups'

export class ExtGridshowingroupsmenuitemComponent extends Ext_grid_menu_ShowInGroups_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-gridshowingroupsmenuitem', ExtGridshowingroupsmenuitemComponent);
    });
})();
