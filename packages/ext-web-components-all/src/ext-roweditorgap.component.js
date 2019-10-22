import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRoweditorgap extends Ext_grid_rowedit_Gap {
    constructor() {
        super ([],[])
        this.xtype = 'roweditorgap';
    }
}
window.customElements.define('ext-roweditorgap', HTMLParsedElement.withParsedCallback(ExtRoweditorgap))
