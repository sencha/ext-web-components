import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_menu_SortDesc from './Ext/grid/menu/SortDesc.js';
import ElementParser from './common/ElementParser.js';

var EWCGridsortdescmenuitem = /*#__PURE__*/function (_Ext_grid_menu_SortDe) {
  _inheritsLoose(EWCGridsortdescmenuitem, _Ext_grid_menu_SortDe);

  var _super = _createSuper(EWCGridsortdescmenuitem);

  function EWCGridsortdescmenuitem() {
    var _this;

    _this = _Ext_grid_menu_SortDe.call(this, [], []) || this;
    _this.xtype = 'gridsortdescmenuitem';
    return _this;
  }

  return EWCGridsortdescmenuitem;
}(Ext_grid_menu_SortDesc);

export { EWCGridsortdescmenuitem as default };

try {
  if (window.customElements.get('ext-gridsortdescmenuitem') == undefined) {
    window.customElements.define('ext-gridsortdescmenuitem', ElementParser.withParsedCallback(EWCGridsortdescmenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridsortdescmenuitem') == undefined) {
    window.customElements.define('ext-gridsortdescmenuitem', EWCGridsortdescmenuitem);
  }
}