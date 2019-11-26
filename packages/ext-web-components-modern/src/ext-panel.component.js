//import Ext_panel_Panel from '@sencha/ext-runtime-base/dist/./Ext/panel/Panel.js';
import Ext_panel_Panel from './Ext/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPanel extends Ext_panel_Panel {
    constructor() {
        super ([], []);
        this.xtype = 'panel';
    }

}
window.customElements.define('ext-panel', HTMLParsedElement.withParsedCallback(EWCPanel));

