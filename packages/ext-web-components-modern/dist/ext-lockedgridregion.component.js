import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_LockedGridRegion from './Ext/grid/LockedGridRegion.js';
import ElementParser from './runtime/ElementParser.js';

var EWCLockedgridregion = /*#__PURE__*/function (_Ext_grid_LockedGridR) {
  _inheritsLoose(EWCLockedgridregion, _Ext_grid_LockedGridR);

  var _super = _createSuper(EWCLockedgridregion);

  function EWCLockedgridregion() {
    var _this;

    _this = _Ext_grid_LockedGridR.call(this, [], []) || this;
    _this.xtype = 'lockedgridregion';
    return _this;
  }

  return EWCLockedgridregion;
}(Ext_grid_LockedGridRegion);

export { EWCLockedgridregion as default };

try {
  window.customElements.define('ext-lockedgridregion', ElementParser.withParsedCallback(EWCLockedgridregion));
} catch (e) {
  window.customElements.define('ext-lockedgridregion', EWCLockedgridregion);
}