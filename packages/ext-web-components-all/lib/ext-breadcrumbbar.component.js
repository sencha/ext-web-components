import Ext_BreadcrumbBar_Component from './Ext/BreadcrumbBar'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtBreadcrumbbarComponent extends Ext_BreadcrumbBar_Component {
    constructor() {
        super ()
        this.xtype = 'breadcrumbbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbarComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(ExtBreadcrumbbarComponent))
