import Ext_pivot_d3_Container from './Ext/pivot/d3/Container.js';
import ElementParser from './ElementParser.js';

export default class EWCPivotd3container extends Ext_pivot_d3_Container {
  constructor() {
    super ([], []);
    this.xtype = 'pivotd3container';
  }
}
try {
  window.customElements.define('ext-pivotd3container', ElementParser.withParsedCallback(EWCPivotd3container));
}
catch(e) {
  window.customElements.define('ext-pivotd3container', EWCPivotd3container);
}
