import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import ElementParser from './common/ElementParser.js';

var EWCPullrefreshbar = /*#__PURE__*/function (_Ext_dataview_pullref) {
  _inheritsLoose(EWCPullrefreshbar, _Ext_dataview_pullref);

  function EWCPullrefreshbar() {
    var _this;

    _this = _Ext_dataview_pullref.call(this, [], []) || this;
    _this.xtype = 'pullrefreshbar';
    return _this;
  }

  return EWCPullrefreshbar;
}(Ext_dataview_pullrefresh_Bar);

export { EWCPullrefreshbar as default };

try {
  if (window.customElements.get('ext-pullrefreshbar') == undefined) {
    window.customElements.define('ext-pullrefreshbar', ElementParser.withParsedCallback(EWCPullrefreshbar));
  }
} catch (e) {
  if (window.customElements.get('ext-pullrefreshbar') == undefined) {
    window.customElements.define('ext-pullrefreshbar', EWCPullrefreshbar);
  }
}