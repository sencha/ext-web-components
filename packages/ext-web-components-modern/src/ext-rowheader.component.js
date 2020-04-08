import Ext_grid_RowHeader from './Ext/grid/RowHeader.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRowheader extends Ext_grid_RowHeader {
  constructor() {
    super ([], []);
    this.xtype = 'rowheader';
  }
}
try {
  if (window.customElements.get('ext-rowheader') == undefined) {
    window.customElements.define('ext-rowheader', ElementParser.withParsedCallback(EWCRowheader));
  }
}
catch(e) {
  if (window.customElements.get('ext-rowheader') == undefined) {
    window.customElements.define('ext-rowheader', EWCRowheader);
  }
}
