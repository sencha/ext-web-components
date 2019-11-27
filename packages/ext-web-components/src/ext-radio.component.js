//import Ext_form_Radio from '@sencha/ext-runtime-base/dist/./Ext/form/Radio.js';
import Ext_form_Radio from './Ext/form/Radio.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCRadio extends Ext_form_Radio {
    constructor() {
        super ([], []);
        this.xtype = 'radio';
    }

}
window.customElements.define('ext-radio', HTMLParsedElement.withParsedCallback(EWCRadio));

