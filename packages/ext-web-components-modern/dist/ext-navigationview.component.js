import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_NavigationView from './Ext/NavigationView.js';
import ElementParser from './runtime/ElementParser.js';

var EWCNavigationview = /*#__PURE__*/function (_Ext_NavigationView) {
  _inheritsLoose(EWCNavigationview, _Ext_NavigationView);

  var _super = _createSuper(EWCNavigationview);

  function EWCNavigationview() {
    var _this;

    _this = _Ext_NavigationView.call(this, [], []) || this;
    _this.xtype = 'navigationview';
    return _this;
  }

  return EWCNavigationview;
}(Ext_NavigationView);

export { EWCNavigationview as default };

try {
  window.customElements.define('ext-navigationview', ElementParser.withParsedCallback(EWCNavigationview));
} catch (e) {
  window.customElements.define('ext-navigationview', EWCNavigationview);
}