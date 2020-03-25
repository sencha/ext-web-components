import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_dataview_listswiper_Stepper from './Ext/dataview/listswiper/Stepper.js';
import ElementParser from './runtime/ElementParser.js';

var EWCListswiperstepper = /*#__PURE__*/function (_Ext_dataview_listswi) {
  _inheritsLoose(EWCListswiperstepper, _Ext_dataview_listswi);

  var _super = _createSuper(EWCListswiperstepper);

  function EWCListswiperstepper() {
    var _this;

    _this = _Ext_dataview_listswi.call(this, [], []) || this;
    _this.xtype = 'listswiperstepper';
    return _this;
  }

  return EWCListswiperstepper;
}(Ext_dataview_listswiper_Stepper);

export { EWCListswiperstepper as default };

try {
  window.customElements.define('ext-listswiperstepper', ElementParser.withParsedCallback(EWCListswiperstepper));
} catch (e) {
  window.customElements.define('ext-listswiperstepper', EWCListswiperstepper);
}