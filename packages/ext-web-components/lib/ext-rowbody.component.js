import Ext_grid_RowBody_Component from './Ext/grid/RowBody'

export class ExtRowbodyComponent extends Ext_grid_RowBody_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-rowbody', ExtRowbodyComponent);
    });
})();
