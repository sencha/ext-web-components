//import Ext_NavigationView from '@sencha/ext-runtime-base/dist/./Ext/NavigationView.js';
import Ext_NavigationView from './Ext/NavigationView.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCNavigationview extends Ext_NavigationView {
    constructor() {
        super ([], []);
        this.xtype = 'navigationview';
    }

}
window.customElements.define('ext-navigationview', HTMLParsedElement.withParsedCallback(EWCNavigationview));

