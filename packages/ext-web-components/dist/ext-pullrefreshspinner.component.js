import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_dataview_pullrefresh_Spinner from '@sencha/ext-runtime-base/dist/./Ext/dataview/pullrefresh/Spinner.js';
import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCPullrefreshspinner =
/*#__PURE__*/
function (_Ext_dataview_pullref) {
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
window.customElements.define('ext-pullrefreshspinner', HTMLParsedElement.withParsedCallback(EWCPullrefreshspinner));