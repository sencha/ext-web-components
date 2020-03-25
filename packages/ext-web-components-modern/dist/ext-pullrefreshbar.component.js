import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_pullrefresh_Bar from './Ext/dataview/pullrefresh/Bar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPullrefreshbar = /*#__PURE__*/function (_Ext_dataview_pullref) {
  _inheritsLoose(EWCPullrefreshbar, _Ext_dataview_pullref);

  var _super = _createSuper(EWCPullrefreshbar);

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
  window.customElements.define('ext-pullrefreshbar', ElementParser.withParsedCallback(EWCPullrefreshbar));
} catch (e) {
  window.customElements.define('ext-pullrefreshbar', EWCPullrefreshbar);
}