import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_panel_Panel from '../../../Ext/panel/Panel.js';

var Ext_ux_colorpick_Selector = /*#__PURE__*/function (_Ext_panel_Panel) {
  _inheritsLoose(Ext_ux_colorpick_Selector, _Ext_panel_Panel);

  var _super = _createSuper(Ext_ux_colorpick_Selector);

  Ext_ux_colorpick_Selector.PROPERTIES = function PROPERTIES() {
    return ['alphaDecimalFormat', 'cancelButtonText', 'color', 'fieldPad', 'fieldWidth', 'format', 'okButtonText', 'showOkCancelButtons', 'showPreviousColor', 'value'];
  };

  Ext_ux_colorpick_Selector.EVENTS = function EVENTS() {
    return [{
      name: 'cancel',
      parameters: 'sender'
    }, {
      name: 'change',
      parameters: 'sender,color,previousColor'
    }, {
      name: 'ok',
      parameters: 'sender,color'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_colorpick_Selector.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_colorpick_Selector.PROPERTIES());
    return Ext_panel_Panel.getProperties(properties);
  };

  Ext_ux_colorpick_Selector.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_colorpick_Selector.EVENTS());
    return Ext_panel_Panel.getEvents(events);
  };

  _createClass(Ext_ux_colorpick_Selector, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_panel_Panel.observedAttributes;
      Ext_ux_colorpick_Selector.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_colorpick_Selector.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_colorpick_Selector(properties, events) {
    return _Ext_panel_Panel.call(this, properties.concat(Ext_ux_colorpick_Selector.PROPERTIES()), events.concat(Ext_ux_colorpick_Selector.EVENTS())) || this;
  }

  var _proto = Ext_ux_colorpick_Selector.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_panel_Panel.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_panel_Panel.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_colorpick_Selector;
}(Ext_panel_Panel);

export { Ext_ux_colorpick_Selector as default };