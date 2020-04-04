import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_component_SimpleListItem from './Ext/dataview/component/SimpleListItem.js';
import ElementParser from './common/ElementParser.js';

var EWCSimplelistitem = /*#__PURE__*/function (_Ext_dataview_compone) {
  _inheritsLoose(EWCSimplelistitem, _Ext_dataview_compone);

  var _super = _createSuper(EWCSimplelistitem);

  function EWCSimplelistitem() {
    var _this;

    _this = _Ext_dataview_compone.call(this, [], []) || this;
    _this.xtype = 'simplelistitem';
    return _this;
  }

  return EWCSimplelistitem;
}(Ext_dataview_component_SimpleListItem);

export { EWCSimplelistitem as default };

try {
  if (window.customElements.get('ext-simplelistitem') == undefined) {
    window.customElements.define('ext-simplelistitem', ElementParser.withParsedCallback(EWCSimplelistitem));
  }
} catch (e) {
  if (window.customElements.get('ext-simplelistitem') == undefined) {
    window.customElements.define('ext-simplelistitem', EWCSimplelistitem);
  }
}