import Ext_NavigationView from './Ext/NavigationView.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtNavigationview extends Ext_NavigationView {
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
//        window.customElements.define('ext-navigationview', ExtNavigationview);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-navigationview', HTMLParsedElement.withParsedCallback(ExtNavigationview))
//export default reactify(ExtNavigationview);