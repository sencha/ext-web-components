//import Ext_TitleBar from '@sencha/ext-runtime-base/dist/./Ext/TitleBar.js';
import Ext_TitleBar from './Ext/TitleBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCTitlebar extends Ext_TitleBar {
    constructor() {
        super ([], []);
        this.xtype = 'titlebar';
    }

}
window.customElements.define('ext-titlebar', HTMLParsedElement.withParsedCallback(EWCTitlebar));

