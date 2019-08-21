import Ext_dataview_BoundList_Component from './Ext/dataview/BoundList'

export class ExtBoundlistComponent extends Ext_dataview_BoundList_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-boundlist', ExtBoundlistComponent);
    });
})();
