//import Ext_grid_rowedit_Gap from '@sencha/ext-runtime-base/dist/./Ext/grid/rowedit/Gap.js';
import Ext_grid_rowedit_Gap from './Ext/grid/rowedit/Gap.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRoweditorgap extends Ext_grid_rowedit_Gap {
    constructor() {
        super ([], []);
        this.xtype = 'roweditorgap';
    }

}
window.customElements.define('ext-roweditorgap', HTMLParsedElement.withParsedCallback(EWCRoweditorgap));

