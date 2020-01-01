import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import ElementParser from './ElementParser.js';

export default class EWCBreadcrumbbar extends Ext_BreadcrumbBar {
  constructor() {
    super ([], []);
    this.xtype = 'breadcrumbbar';
  }
}
window.customElements.define('ext-breadcrumbbar', ElementParser.withParsedCallback(EWCBreadcrumbbar));
