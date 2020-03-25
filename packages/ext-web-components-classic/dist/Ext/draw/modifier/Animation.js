import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_draw_modifier_Modifier from '../../../Ext/draw/modifier/Modifier.js';

var Ext_draw_modifier_Animation = /*#__PURE__*/function (_Ext_draw_modifier_Mo) {
  _inheritsLoose(Ext_draw_modifier_Animation, _Ext_draw_modifier_Mo);

  var _super = _createSuper(Ext_draw_modifier_Animation);

  Ext_draw_modifier_Animation.PROPERTIES = function PROPERTIES() {
    return ['customDurations', 'customEasings', 'duration', 'easing', 'listeners', 'lower', 'sprite', 'upper'];
  };

  Ext_draw_modifier_Animation.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_modifier_Animation.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_modifier_Animation.PROPERTIES());
    return Ext_draw_modifier_Modifier.getProperties(properties);
  };

  Ext_draw_modifier_Animation.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_modifier_Animation.EVENTS());
    return Ext_draw_modifier_Modifier.getEvents(events);
  };

  _createClass(Ext_draw_modifier_Animation, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_modifier_Mo.observedAttributes;
      Ext_draw_modifier_Animation.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_modifier_Animation.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_modifier_Animation(properties, events) {
    return _Ext_draw_modifier_Mo.call(this, properties.concat(Ext_draw_modifier_Animation.PROPERTIES()), events.concat(Ext_draw_modifier_Animation.EVENTS())) || this;
  }

  var _proto = Ext_draw_modifier_Animation.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_modifier_Mo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_modifier_Mo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_modifier_Animation;
}(Ext_draw_modifier_Modifier);

export { Ext_draw_modifier_Animation as default };