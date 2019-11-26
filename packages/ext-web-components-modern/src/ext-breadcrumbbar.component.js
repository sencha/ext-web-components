//import Ext_BreadcrumbBar from '@sencha/ext-runtime-base/dist/./Ext/BreadcrumbBar.js';
import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCBreadcrumbbar extends Ext_BreadcrumbBar {
    constructor() {
        super ([], []);
        this.xtype = 'breadcrumbbar';
    }

}
window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(EWCBreadcrumbbar));

