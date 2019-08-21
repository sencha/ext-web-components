import Ext_dataview_EmptyText_Component from './Ext/dataview/EmptyText'

export class ExtEmptytextComponent extends Ext_dataview_EmptyText_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-emptytext', ExtEmptytextComponent);
    });
})();
