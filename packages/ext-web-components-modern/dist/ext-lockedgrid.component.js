import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_LockedGrid from './Ext/grid/LockedGrid.js';
import ElementParser from './runtime/ElementParser.js';

var EWCLockedgrid = /*#__PURE__*/function (_Ext_grid_LockedGrid) {
  _inheritsLoose(EWCLockedgrid, _Ext_grid_LockedGrid);

  var _super = _createSuper(EWCLockedgrid);

  function EWCLockedgrid() {
    var _this;

    _this = _Ext_grid_LockedGrid.call(this, [], []) || this;
    _this.xtype = 'lockedgrid';
    return _this;
  }

  return EWCLockedgrid;
}(Ext_grid_LockedGrid);

export { EWCLockedgrid as default };

try {
  window.customElements.define('ext-lockedgrid', ElementParser.withParsedCallback(EWCLockedgrid));
} catch (e) {
  window.customElements.define('ext-lockedgrid', EWCLockedgrid);
}