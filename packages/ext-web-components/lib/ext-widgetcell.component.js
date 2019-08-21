import Ext_grid_cell_Widget_Component from './Ext/grid/cell/Widget'

export class ExtWidgetcellComponent extends Ext_grid_cell_Widget_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-widgetcell', ExtWidgetcellComponent);
    });
})();
