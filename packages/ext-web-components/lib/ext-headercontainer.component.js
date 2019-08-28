import Ext_grid_HeaderContainer_Component from './Ext/grid/HeaderContainer'

export class ExtHeadercontainerComponent extends Ext_grid_HeaderContainer_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-headercontainer', ExtHeadercontainerComponent);
    });
})();
