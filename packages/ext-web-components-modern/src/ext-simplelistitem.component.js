//import Ext_dataview_component_SimpleListItem from '@sencha/ext-runtime-base/dist/./Ext/dataview/component/SimpleListItem.js';
import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCSimplelistitem extends Ext_dataview_component_SimpleListItem {
    constructor() {
        super ([], []);
        this.xtype = 'simplelistitem';
    }

}
window.customElements.define('ext-simplelistitem', HTMLParsedElement.withParsedCallback(EWCSimplelistitem));

