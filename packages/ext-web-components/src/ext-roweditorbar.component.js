//import Ext_grid_rowedit_Bar from '@sencha/ext-runtime-base/dist/./Ext/grid/rowedit/Bar.js';
import Ext_grid_rowedit_Bar from './Ext/grid/rowedit/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRoweditorbar extends Ext_grid_rowedit_Bar {
    constructor() {
        super ([], []);
        this.xtype = 'roweditorbar';
    }

}
window.customElements.define('ext-roweditorbar', HTMLParsedElement.withParsedCallback(EWCRoweditorbar));

