import Ext_dataview_component_SimpleListItem_Component from './Ext/dataview/component/SimpleListItem'

export class ExtSimplelistitemComponent extends Ext_dataview_component_SimpleListItem_Component {
    constructor() {super ('','',{},'')}
}

(function () {
    Ext.onReady(function() {
        window.customElements.define('ext-simplelistitem', ExtSimplelistitemComponent);
    });
})();
