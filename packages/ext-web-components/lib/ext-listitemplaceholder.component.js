import Ext_dataview_ListItemPlaceholder_Component from './Ext/dataview/ListItemPlaceholder'

export class ExtListitemplaceholderComponent extends Ext_dataview_ListItemPlaceholder_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-listitemplaceholder', ExtListitemplaceholderComponent);
    });
})();
