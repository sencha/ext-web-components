import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_menu_ShowInGroups from './Ext/grid/menu/ShowInGroups.js';
import ElementParser from './common/ElementParser.js';

var EWCGridshowingroupsmenuitem = /*#__PURE__*/function (_Ext_grid_menu_ShowIn) {
  _inheritsLoose(EWCGridshowingroupsmenuitem, _Ext_grid_menu_ShowIn);

  var _super = _createSuper(EWCGridshowingroupsmenuitem);

  function EWCGridshowingroupsmenuitem() {
    var _this;

    _this = _Ext_grid_menu_ShowIn.call(this, [], []) || this;
    _this.xtype = 'gridshowingroupsmenuitem';
    return _this;
  }

  return EWCGridshowingroupsmenuitem;
}(Ext_grid_menu_ShowInGroups);

export { EWCGridshowingroupsmenuitem as default };

try {
  if (window.customElements.get('ext-gridshowingroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridshowingroupsmenuitem', ElementParser.withParsedCallback(EWCGridshowingroupsmenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridshowingroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridshowingroupsmenuitem', EWCGridshowingroupsmenuitem);
  }
}