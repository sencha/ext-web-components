//import Ext_List from '@sencha/ext-runtime-base/dist/./Ext/List.js';
import Ext_List from './Ext/List.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCList extends Ext_List {
    constructor() {
        super ([], []);
        this.xtype = 'list';
    }

}
window.customElements.define('ext-list', HTMLParsedElement.withParsedCallback(EWCList));

