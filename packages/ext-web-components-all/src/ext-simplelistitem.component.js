import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSimplelistitem extends Ext_dataview_component_SimpleListItem {
    constructor() {
        super ([],[])
        this.xtype = 'simplelistitem';
    }
}
window.customElements.define('ext-simplelistitem', HTMLParsedElement.withParsedCallback(ExtSimplelistitem))
