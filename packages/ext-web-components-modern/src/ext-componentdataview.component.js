import Ext_dataview_Component from './Ext/dataview/Component.js';
import ElementParser from './common/ElementParser.js';

export default class EWCComponentdataview extends Ext_dataview_Component {
  constructor() {
    super ([], []);
    this.xtype = 'componentdataview';
  }
}
try {
  if (window.customElements.get('ext-componentdataview') == undefined) {
    window.customElements.define('ext-componentdataview', ElementParser.withParsedCallback(EWCComponentdataview));
  }
}
catch(e) {
  if (window.customElements.get('ext-componentdataview') == undefined) {
    window.customElements.define('ext-componentdataview', EWCComponentdataview);
  }
}
