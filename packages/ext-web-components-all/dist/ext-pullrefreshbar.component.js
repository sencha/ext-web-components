import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPullrefreshbar =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(ExtPullrefreshbar, _Ext_dataview_pullref);

  function ExtPullrefreshbar() {
    var _this;

    _this = _Ext_dataview_pullref.call(this, [], []) || this;
    _this.xtype = 'pullrefreshbar';
    return _this;
  }

  return ExtPullrefreshbar;
}(Ext_dataview_pullrefresh_Bar);

export { ExtPullrefreshbar as default };
window.customElements.define('ext-pullrefreshbar', HTMLParsedElement.withParsedCallback(ExtPullrefreshbar));