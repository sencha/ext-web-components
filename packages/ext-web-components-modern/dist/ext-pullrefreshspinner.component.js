import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import ElementParser from './common/ElementParser.js';

var EWCPullrefreshspinner = /*#__PURE__*/function (_Ext_dataview_pullref) {
  _inheritsLoose(EWCPullrefreshspinner, _Ext_dataview_pullref);

  function EWCPullrefreshspinner() {
    var _this;

    _this = _Ext_dataview_pullref.call(this, [], []) || this;
    _this.xtype = 'pullrefreshspinner';
    return _this;
  }

  return EWCPullrefreshspinner;
}(Ext_dataview_pullrefresh_Spinner);

export { EWCPullrefreshspinner as default };

try {
  if (window.customElements.get('ext-pullrefreshspinner') == undefined) {
    window.customElements.define('ext-pullrefreshspinner', ElementParser.withParsedCallback(EWCPullrefreshspinner));
  }
} catch (e) {
  if (window.customElements.get('ext-pullrefreshspinner') == undefined) {
    window.customElements.define('ext-pullrefreshspinner', EWCPullrefreshspinner);
  }
}