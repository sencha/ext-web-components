import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_interactions_Abstract from './Ext/chart/interactions/Abstract.js';
import ElementParser from './common/ElementParser.js';

var EWCInteraction = /*#__PURE__*/function (_Ext_chart_interactio) {
  _inheritsLoose(EWCInteraction, _Ext_chart_interactio);

  var _super = _createSuper(EWCInteraction);

  function EWCInteraction() {
    var _this;

    _this = _Ext_chart_interactio.call(this, [], []) || this;
    _this.xtype = 'interaction';
    return _this;
  }

  return EWCInteraction;
}(Ext_chart_interactions_Abstract);

export { EWCInteraction as default };

try {
  if (window.customElements.get('ext-interaction') == undefined) {
    window.customElements.define('ext-interaction', ElementParser.withParsedCallback(EWCInteraction));
  }
} catch (e) {
  if (window.customElements.get('ext-interaction') == undefined) {
    window.customElements.define('ext-interaction', EWCInteraction);
  }
}