import Ext_grid_rowedit_Editor_Component from './Ext/grid/rowedit/Editor'

export class ExtRoweditorComponent extends Ext_grid_rowedit_Editor_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-roweditor', ExtRoweditorComponent);
    });
})();
