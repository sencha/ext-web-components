import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtBreadcrumbbar extends Ext_BreadcrumbBar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'breadcrumbbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(ExtBreadcrumbbar))
//export default reactify(ExtBreadcrumbbar);