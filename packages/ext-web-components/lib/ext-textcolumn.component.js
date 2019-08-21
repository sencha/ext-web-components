import Ext_grid_column_Text_Component from './Ext/grid/column/Text'

export class ExtTextcolumnComponent extends Ext_grid_column_Text_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-textcolumn', ExtTextcolumnComponent);
    });
})();
