//import Ext_d3_hierarchy_TreeMap from '@sencha/ext-runtime-base/dist/./Ext/d3/hierarchy/TreeMap.js';
import Ext_d3_hierarchy_TreeMap from './Ext/d3/hierarchy/TreeMap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCD3_treemap extends Ext_d3_hierarchy_TreeMap {
    constructor() {
        super ([], []);
        this.xtype = 'd3-treemap';
    }

}
window.customElements.define('ext-d3-treemap', HTMLParsedElement.withParsedCallback(EWCD3_treemap));

