import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_event_RecorderManager from './Ext/ux/event/RecorderManager.js';
import ElementParser from './runtime/ElementParser.js';

var EWCEventrecordermanager = /*#__PURE__*/function (_Ext_ux_event_Recorde) {
  _inheritsLoose(EWCEventrecordermanager, _Ext_ux_event_Recorde);

  var _super = _createSuper(EWCEventrecordermanager);

  function EWCEventrecordermanager() {
    var _this;

    _this = _Ext_ux_event_Recorde.call(this, [], []) || this;
    _this.xtype = 'eventrecordermanager';
    return _this;
  }

  return EWCEventrecordermanager;
}(Ext_ux_event_RecorderManager);

export { EWCEventrecordermanager as default };

try {
  window.customElements.define('ext-eventrecordermanager', ElementParser.withParsedCallback(EWCEventrecordermanager));
} catch (e) {
  window.customElements.define('ext-eventrecordermanager', EWCEventrecordermanager);
}