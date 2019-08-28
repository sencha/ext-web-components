import Ext_dataview_ItemHeader_Component from './Ext/dataview/ItemHeader'

export class ExtItemheaderComponent extends Ext_dataview_ItemHeader_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-itemheader', ExtItemheaderComponent);
    });
})();
