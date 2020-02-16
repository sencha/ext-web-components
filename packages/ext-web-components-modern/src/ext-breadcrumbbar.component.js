import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCBreadcrumbbar extends Ext_BreadcrumbBar {
  constructor() {
    super ([], []);
    this.xtype = 'breadcrumbbar';
  }
}
try {
  window.customElements.define('ext-breadcrumbbar', ElementParser.withParsedCallback(EWCBreadcrumbbar));
}
catch(e) {
  window.customElements.define('ext-breadcrumbbar', EWCBreadcrumbbar);
}
