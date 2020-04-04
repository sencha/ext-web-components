import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_menu_GroupByThis from './Ext/grid/menu/GroupByThis.js';
import ElementParser from './common/ElementParser.js';

var EWCGridgroupbythismenuitem = /*#__PURE__*/function (_Ext_grid_menu_GroupB) {
  _inheritsLoose(EWCGridgroupbythismenuitem, _Ext_grid_menu_GroupB);

  var _super = _createSuper(EWCGridgroupbythismenuitem);

  function EWCGridgroupbythismenuitem() {
    var _this;

    _this = _Ext_grid_menu_GroupB.call(this, [], []) || this;
    _this.xtype = 'gridgroupbythismenuitem';
    return _this;
  }

  return EWCGridgroupbythismenuitem;
}(Ext_grid_menu_GroupByThis);

export { EWCGridgroupbythismenuitem as default };

try {
  if (window.customElements.get('ext-gridgroupbythismenuitem') == undefined) {
    window.customElements.define('ext-gridgroupbythismenuitem', ElementParser.withParsedCallback(EWCGridgroupbythismenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridgroupbythismenuitem') == undefined) {
    window.customElements.define('ext-gridgroupbythismenuitem', EWCGridgroupbythismenuitem);
  }
}