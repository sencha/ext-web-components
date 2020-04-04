import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_View from './Ext/grid/View.js';
import ElementParser from './common/ElementParser.js';

var EWCTableview = /*#__PURE__*/function (_Ext_grid_View) {
  _inheritsLoose(EWCTableview, _Ext_grid_View);

  var _super = _createSuper(EWCTableview);

  function EWCTableview() {
    var _this;

    _this = _Ext_grid_View.call(this, [], []) || this;
    _this.xtype = 'tableview';
    return _this;
  }

  return EWCTableview;
}(Ext_grid_View);

export { EWCTableview as default };

try {
  if (window.customElements.get('ext-tableview') == undefined) {
    window.customElements.define('ext-tableview', ElementParser.withParsedCallback(EWCTableview));
  }
} catch (e) {
  if (window.customElements.get('ext-tableview') == undefined) {
    window.customElements.define('ext-tableview', EWCTableview);
  }
}