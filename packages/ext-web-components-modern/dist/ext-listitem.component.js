import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_component_ListItem from './Ext/dataview/component/ListItem.js';
import ElementParser from './common/ElementParser.js';

var EWCListitem = /*#__PURE__*/function (_Ext_dataview_compone) {
  _inheritsLoose(EWCListitem, _Ext_dataview_compone);

  var _super = _createSuper(EWCListitem);

  function EWCListitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'listitem';
    return _this;
  }

  return EWCListitem;
}(Ext_dataview_component_ListItem);

export { EWCListitem as default };

try {
  if (window.customElements.get('ext-listitem') == undefined) {
    window.customElements.define('ext-listitem', ElementParser.withParsedCallback(EWCListitem));
  }
} catch (e) {
  if (window.customElements.get('ext-listitem') == undefined) {
    window.customElements.define('ext-listitem', EWCListitem);
  }
}