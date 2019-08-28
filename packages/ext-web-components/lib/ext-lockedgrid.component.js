import Ext_grid_LockedGrid_Component from './Ext/grid/LockedGrid'

export class ExtLockedgridComponent extends Ext_grid_LockedGrid_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-lockedgrid', ExtLockedgridComponent);
    });
})();
