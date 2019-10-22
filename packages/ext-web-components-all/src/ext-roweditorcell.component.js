import Ext_grid_rowedit_Cell from './Ext/grid/rowedit/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRoweditorcell extends Ext_grid_rowedit_Cell {
    constructor() {
        super ([],[])
        this.xtype = 'roweditorcell';
    }
}
window.customElements.define('ext-roweditorcell', HTMLParsedElement.withParsedCallback(ExtRoweditorcell))
