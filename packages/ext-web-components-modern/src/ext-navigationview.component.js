import Ext_NavigationView from './Ext/NavigationView.js';
import ElementParser from './ElementParser.js';

export default class EWCNavigationview extends Ext_NavigationView {
  constructor() {
    super ([], []);
    this.xtype = 'navigationview';
  }
}
window.customElements.define('ext-navigationview', ElementParser.withParsedCallback(EWCNavigationview));
