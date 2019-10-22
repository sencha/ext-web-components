import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtPullrefreshspinner =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
  _inheritsLoose(ExtPullrefreshspinner, _Ext_dataview_pullref);

  function ExtPullrefreshspinner() {
    var _this;

    _this = _Ext_dataview_pullref.call(this, [], []) || this;
    _this.xtype = 'pullrefreshspinner';
    return _this;
  }

  return ExtPullrefreshspinner;
}(Ext_dataview_pullrefresh_Spinner);

export { ExtPullrefreshspinner as default };
window.customElements.define('ext-pullrefreshspinner', HTMLParsedElement.withParsedCallback(ExtPullrefreshspinner));