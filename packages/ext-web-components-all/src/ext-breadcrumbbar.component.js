import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtBreadcrumbbar extends Ext_BreadcrumbBar {
    constructor() {
        super ([],[])
        this.xtype = 'breadcrumbbar';
    }
}
window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(ExtBreadcrumbbar))
