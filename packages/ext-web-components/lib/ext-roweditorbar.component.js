import Ext_grid_rowedit_Bar_Component from './Ext/grid/rowedit/Bar'

export class ExtRoweditorbarComponent extends Ext_grid_rowedit_Bar_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-roweditorbar', ExtRoweditorbarComponent);
    });
})();
