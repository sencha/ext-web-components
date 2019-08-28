import Ext_grid_PagingToolbar_Component from './Ext/grid/PagingToolbar'

export class ExtPagingtoolbarComponent extends Ext_grid_PagingToolbar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-pagingtoolbar', ExtPagingtoolbarComponent);
    });
})();
