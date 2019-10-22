import Ext_NavigationView from './Ext/NavigationView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtNavigationview extends Ext_NavigationView {
    constructor() {
        super ([],[])
        this.xtype = 'navigationview';
    }
}
window.customElements.define('ext-navigationview', HTMLParsedElement.withParsedCallback(ExtNavigationview))
