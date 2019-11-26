//import Ext_dataview_component_ListItem from '@sencha/ext-runtime-base/dist/./Ext/dataview/component/ListItem.js';
import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCListitem extends Ext_dataview_component_ListItem {
    constructor() {
        super ([], []);
        this.xtype = 'listitem';
    }

}
window.customElements.define('ext-listitem', HTMLParsedElement.withParsedCallback(EWCListitem));

