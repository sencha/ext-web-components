import Ext_grid_LockedGridRegion_Component from './Ext/grid/LockedGridRegion'

export class ExtLockedgridregionComponent extends Ext_grid_LockedGridRegion_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-lockedgridregion', ExtLockedgridregionComponent);
    });
})();
