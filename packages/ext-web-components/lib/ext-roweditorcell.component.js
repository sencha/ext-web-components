import Ext_grid_rowedit_Cell_Component from './Ext/grid/rowedit/Cell'

export class ExtRoweditorcellComponent extends Ext_grid_rowedit_Cell_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-roweditorcell', ExtRoweditorcellComponent);
    });
})();
