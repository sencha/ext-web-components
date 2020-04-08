import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPivotgrid extends Ext_pivot_Grid {
  constructor() {
    super ([], []);
    this.xtype = 'pivotgrid';
  }
}
try {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
  }
}
catch(e) {
  if (window.customElements.get('ext-pivotgrid') == undefined) {
    window.customElements.define('ext-pivotgrid', EWCPivotgrid);
  }
}
