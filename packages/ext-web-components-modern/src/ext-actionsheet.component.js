//import Ext_ActionSheet from '@sencha/ext-runtime-base/dist/./Ext/ActionSheet.js';
import Ext_ActionSheet from './Ext/ActionSheet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCActionsheet extends Ext_ActionSheet {
    constructor() {
        super ([], []);
        this.xtype = 'actionsheet';
    }

}
window.customElements.define('ext-actionsheet', HTMLParsedElement.withParsedCallback(EWCActionsheet));

