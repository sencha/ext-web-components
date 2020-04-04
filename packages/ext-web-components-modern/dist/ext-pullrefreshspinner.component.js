import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_pullrefresh_Spinner from './Ext/dataview/pullrefresh/Spinner.js';
import ElementParser from './common/ElementParser.js';

var EWCPullrefreshspinner = /*#__PURE__*/function (_Ext_dataview_pullref) {
  _inheritsLoose(EWCPullrefreshspinner, _Ext_dataview_pullref);

  var _super = _createSuper(EWCPullrefreshspinner);

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