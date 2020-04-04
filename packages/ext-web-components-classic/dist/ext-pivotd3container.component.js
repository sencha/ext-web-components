import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_d3_Container from './Ext/pivot/d3/Container.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotd3container = /*#__PURE__*/function (_Ext_pivot_d3_Contain) {
  _inheritsLoose(EWCPivotd3container, _Ext_pivot_d3_Contain);

  var _super = _createSuper(EWCPivotd3container);

  function EWCPivotd3container() {
    var _this;

    _this = _Ext_pivot_d3_Contain.call(this, [], []) || this;
    _this.xtype = 'pivotd3container';
    return _this;
  }

  return EWCPivotd3container;
}(Ext_pivot_d3_Container);

export { EWCPivotd3container as default };

try {
  if (window.customElements.get('ext-pivotd3container') == undefined) {
    window.customElements.define('ext-pivotd3container', ElementParser.withParsedCallback(EWCPivotd3container));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotd3container') == undefined) {
    window.customElements.define('ext-pivotd3container', EWCPivotd3container);
  }
}