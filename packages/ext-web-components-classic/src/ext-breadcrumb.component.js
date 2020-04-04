import Ext_toolbar_Breadcrumb from './Ext/toolbar/Breadcrumb.js';
import ElementParser from './common/ElementParser.js';

export default class EWCBreadcrumb extends Ext_toolbar_Breadcrumb {
  constructor() {
    super ([], []);
    this.xtype = 'breadcrumb';
  }
}
try {
  if (window.customElements.get('ext-breadcrumb') == undefined) {
    window.customElements.define('ext-breadcrumb', ElementParser.withParsedCallback(EWCBreadcrumb));
  }
}
catch(e) {
  if (window.customElements.get('ext-breadcrumb') == undefined) {
    window.customElements.define('ext-breadcrumb', EWCBreadcrumb);
  }
}
