import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPullrefreshbar extends Ext_dataview_pullrefresh_Bar {
  constructor() {
    super ([], []);
    this.xtype = 'pullrefreshbar';
  }
}
try {
  if (window.customElements.get('ext-pullrefreshbar') == undefined) {
    window.customElements.define('ext-pullrefreshbar', ElementParser.withParsedCallback(EWCPullrefreshbar));
  }
}
catch(e) {
  if (window.customElements.get('ext-pullrefreshbar') == undefined) {
    window.customElements.define('ext-pullrefreshbar', EWCPullrefreshbar);
  }
}
