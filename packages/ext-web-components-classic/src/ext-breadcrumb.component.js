//import Ext_toolbar_Breadcrumb from '@sencha/ext-runtime-base/dist/./Ext/toolbar/Breadcrumb.js';
import Ext_toolbar_Breadcrumb from './Ext/toolbar/Breadcrumb.js';
import ElementParser from './ElementParser.js';

export default class EWCBreadcrumb extends Ext_toolbar_Breadcrumb {
    constructor() {
        super ([], []);
        this.xtype = 'breadcrumb';
    }

}
window.customElements.define('ext-breadcrumb', ElementParser.withParsedCallback(EWCBreadcrumb));

