import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_Row from './Ext/grid/Row.js';
import ElementParser from './common/ElementParser.js';

var EWCGridrow = /*#__PURE__*/function (_Ext_grid_Row) {
  _inheritsLoose(EWCGridrow, _Ext_grid_Row);

  var _super = _createSuper(EWCGridrow);

  function EWCGridrow() {
    var _this;

    _this = _Ext_grid_Row.call(this, [], []) || this;
    _this.xtype = 'gridrow';
    return _this;
  }

  return EWCGridrow;
}(Ext_grid_Row);

export { EWCGridrow as default };

try {
  if (window.customElements.get('ext-gridrow') == undefined) {
    window.customElements.define('ext-gridrow', ElementParser.withParsedCallback(EWCGridrow));
  }
} catch (e) {
  if (window.customElements.get('ext-gridrow') == undefined) {
    window.customElements.define('ext-gridrow', EWCGridrow);
  }
}