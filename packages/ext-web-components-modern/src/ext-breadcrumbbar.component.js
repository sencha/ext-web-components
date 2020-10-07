import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCBreadcrumbbar extends Ext_BreadcrumbBar {
  constructor() {
    super ([], []);
    this.xtype = 'breadcrumbbar';
  }
}
try {
  if (window.customElements.get('ext-breadcrumbbar') == undefined) {
    window.customElements.define('ext-breadcrumbbar', ElementParser.withParsedCallback(EWCBreadcrumbbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-breadcrumbbar') == undefined) {
    window.customElements.define('ext-breadcrumbbar', EWCBreadcrumbbar);
  }
}
