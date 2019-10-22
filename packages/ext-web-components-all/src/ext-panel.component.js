import Ext_panel_Panel from './Ext/panel/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPanel extends Ext_panel_Panel {
    constructor() {
        super ([],[])
        this.xtype = 'panel';
    }
}
window.customElements.define('ext-panel', HTMLParsedElement.withParsedCallback(ExtPanel))
