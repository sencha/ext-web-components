import Ext_pivot_d3_TreeMap from './Ext/pivot/d3/TreeMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPivottreemap extends Ext_pivot_d3_TreeMap {
    constructor() {
        super ([],[])
        this.xtype = 'pivottreemap';
    }
}
window.customElements.define('ext-pivottreemap', HTMLParsedElement.withParsedCallback(ExtPivottreemap))
