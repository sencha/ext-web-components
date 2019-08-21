import Ext_grid_cell_Text_Component from './Ext/grid/cell/Text'

export class ExtTextcellComponent extends Ext_grid_cell_Text_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-textcell', ExtTextcellComponent);
    });
})();
