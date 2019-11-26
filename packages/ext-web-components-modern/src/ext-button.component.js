//import Ext_Button from '@sencha/ext-runtime-base/dist/./Ext/Button.js';
import Ext_Button from './Ext/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCButton extends Ext_Button {
    constructor() {
        super ([], []);
        this.xtype = 'button';
    }

}
window.customElements.define('ext-button', HTMLParsedElement.withParsedCallback(EWCButton));

