import Ext_dataview_component_DataItem from './Ext/dataview/component/DataItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDataitem extends Ext_dataview_component_DataItem {
    constructor() {
        super ([],[])
        this.xtype = 'dataitem';
    }
}
window.customElements.define('ext-dataitem', HTMLParsedElement.withParsedCallback(ExtDataitem))
