import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_RowBody from './Ext/grid/RowBody.js';
import ElementParser from './common/ElementParser.js';

var EWCRowbody = /*#__PURE__*/function (_Ext_grid_RowBody) {
  _inheritsLoose(EWCRowbody, _Ext_grid_RowBody);

  var _super = _createSuper(EWCRowbody);

  function EWCRowbody() {
    var _this;

    _this = _Ext_grid_RowBody.call(this, [], []) || this;
    _this.xtype = 'rowbody';
    return _this;
  }

  return EWCRowbody;
}(Ext_grid_RowBody);

export { EWCRowbody as default };

try {
  if (window.customElements.get('ext-rowbody') == undefined) {
    window.customElements.define('ext-rowbody', ElementParser.withParsedCallback(EWCRowbody));
  }
} catch (e) {
  if (window.customElements.get('ext-rowbody') == undefined) {
    window.customElements.define('ext-rowbody', EWCRowbody);
  }
}