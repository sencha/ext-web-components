import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_menu_SortAsc from './Ext/grid/menu/SortAsc.js';
import ElementParser from './common/ElementParser.js';

var EWCGridsortascmenuitem = /*#__PURE__*/function (_Ext_grid_menu_SortAs) {
  _inheritsLoose(EWCGridsortascmenuitem, _Ext_grid_menu_SortAs);

  var _super = _createSuper(EWCGridsortascmenuitem);

  function EWCGridsortascmenuitem() {
    var _this;

    _this = _Ext_grid_menu_SortAs.call(this, [], []) || this;
    _this.xtype = 'gridsortascmenuitem';
    return _this;
  }

  return EWCGridsortascmenuitem;
}(Ext_grid_menu_SortAsc);

export { EWCGridsortascmenuitem as default };

try {
  if (window.customElements.get('ext-gridsortascmenuitem') == undefined) {
    window.customElements.define('ext-gridsortascmenuitem', ElementParser.withParsedCallback(EWCGridsortascmenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridsortascmenuitem') == undefined) {
    window.customElements.define('ext-gridsortascmenuitem', EWCGridsortascmenuitem);
  }
}