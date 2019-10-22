import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRoweditorbar extends Ext_grid_rowedit_Bar {
    constructor() {
        super ([],[])
        this.xtype = 'roweditorbar';
    }
}
window.customElements.define('ext-roweditorbar', HTMLParsedElement.withParsedCallback(ExtRoweditorbar))
