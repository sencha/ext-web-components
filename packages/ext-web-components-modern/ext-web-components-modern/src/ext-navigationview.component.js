import Ext_NavigationView from './Ext/NavigationView.js';
import ElementParser from './common/ElementParser.js';

export default class EWCNavigationview extends Ext_NavigationView {
  constructor() {
    super ([], []);
    this.xtype = 'navigationview';
  }
}
try {
  if (window.customElements.get('ext-navigationview') == undefined) {
    window.customElements.define('ext-navigationview', ElementParser.withParsedCallback(EWCNavigationview));
  }
}
catch(e) {
  if (window.customElements.get('ext-navigationview') == undefined) {
    window.customElements.define('ext-navigationview', EWCNavigationview);
  }
}
