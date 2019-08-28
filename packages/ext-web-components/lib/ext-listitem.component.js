import Ext_dataview_component_ListItem_Component from './Ext/dataview/component/ListItem'

export class ExtListitemComponent extends Ext_dataview_component_ListItem_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-listitem', ExtListitemComponent);
    });
})();
