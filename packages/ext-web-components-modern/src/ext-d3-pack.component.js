//import Ext_d3_hierarchy_Pack from '@sencha/ext-runtime-base/dist/./Ext/d3/hierarchy/Pack.js';
import Ext_d3_hierarchy_Pack from './Ext/d3/hierarchy/Pack.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCD3_pack extends Ext_d3_hierarchy_Pack {
    constructor() {
        super ([], []);
        this.xtype = 'd3-pack';
    }

}
window.customElements.define('ext-d3-pack', HTMLParsedElement.withParsedCallback(EWCD3_pack));

