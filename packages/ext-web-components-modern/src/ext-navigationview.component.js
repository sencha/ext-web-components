import Ext_NavigationView from './Ext/NavigationView.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCNavigationview extends Ext_NavigationView {
  constructor() {
    super ([], []);
    this.xtype = 'navigationview';
  }
}
try {
  window.customElements.define('ext-navigationview', ElementParser.withParsedCallback(EWCNavigationview));
}
catch(e) {
  window.customElements.define('ext-navigationview', EWCNavigationview);
}
