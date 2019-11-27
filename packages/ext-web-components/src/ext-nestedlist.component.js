//import Ext_NestedList from '@sencha/ext-runtime-base/dist/./Ext/NestedList.js';
import Ext_NestedList from './Ext/NestedList.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCNestedlist extends Ext_NestedList {
    constructor() {
        super ([], []);
        this.xtype = 'nestedlist';
    }

}
window.customElements.define('ext-nestedlist', HTMLParsedElement.withParsedCallback(EWCNestedlist));

