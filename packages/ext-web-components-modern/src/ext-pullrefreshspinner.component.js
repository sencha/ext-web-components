import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import ElementParser from './common/ElementParser.js';

export default class EWCPullrefreshspinner extends Ext_dataview_pullrefresh_Spinner {
  constructor() {
    super ([], []);
    this.xtype = 'pullrefreshspinner';
  }
}
try {
  if (window.customElements.get('ext-pullrefreshspinner') == undefined) {
    window.customElements.define('ext-pullrefreshspinner', ElementParser.withParsedCallback(EWCPullrefreshspinner));
  }
}
catch(e) {
  if (window.customElements.get('ext-pullrefreshspinner') == undefined) {
    window.customElements.define('ext-pullrefreshspinner', EWCPullrefreshspinner);
  }
}
