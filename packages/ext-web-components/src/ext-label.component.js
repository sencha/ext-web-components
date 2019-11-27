//import Ext_Label from '@sencha/ext-runtime-base/dist/./Ext/Label.js';
import Ext_Label from './Ext/Label.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCLabel extends Ext_Label {
    constructor() {
        super ([], []);
        this.xtype = 'label';
    }

}
window.customElements.define('ext-label', HTMLParsedElement.withParsedCallback(EWCLabel));

