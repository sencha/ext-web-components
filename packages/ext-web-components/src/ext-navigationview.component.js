import Ext_NavigationView from './Ext/NavigationView'
import HTMLParsedElement from './HTMLParsedElement'

export class ExtNavigationviewComponent extends Ext_NavigationView {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'navigationview'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-navigationview', ExtNavigationviewComponent);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-navigationview', HTMLParsedElement.withParsedCallback(ExtNavigationviewComponent))
