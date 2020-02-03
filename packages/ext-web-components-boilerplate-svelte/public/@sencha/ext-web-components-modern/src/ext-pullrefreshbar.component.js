import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import ElementParser from './ElementParser.js';

export default class EWCPullrefreshbar extends Ext_dataview_pullrefresh_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'pullrefreshbar';
  }
}
try {
  window.customElements.define('ext-pullrefreshbar', ElementParser.withParsedCallback(EWCPullrefreshbar));
}
catch(e) {
  window.customElements.define('ext-pullrefreshbar', EWCPullrefreshbar);
}
