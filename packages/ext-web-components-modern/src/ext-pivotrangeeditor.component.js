import Ext_pivot_plugin_rangeeditor_Panel from './Ext/pivot/plugin/rangeeditor/Panel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotrangeeditor extends Ext_pivot_plugin_rangeeditor_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'pivotrangeeditor';
  }
}
try {
  if (window.customElements.get('ext-pivotrangeeditor') == undefined) {
    window.customElements.define('ext-pivotrangeeditor', ElementParser.withParsedCallback(EWCPivotrangeeditor));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotrangeeditor') == undefined) {
    window.customElements.define('ext-pivotrangeeditor', EWCPivotrangeeditor);
  }
}
