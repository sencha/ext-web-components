import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_fx_easing_Linear from '../../../Ext/fx/easing/Linear.js';

var Ext_fx_easing_EaseOut = /*#__PURE__*/function (_Ext_fx_easing_Linear) {
  _inheritsLoose(Ext_fx_easing_EaseOut, _Ext_fx_easing_Linear);

  var _super = _createSuper(Ext_fx_easing_EaseOut);

  Ext_fx_easing_EaseOut.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_fx_easing_EaseOut.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_easing_EaseOut.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_easing_EaseOut.PROPERTIES());
    return Ext_fx_easing_Linear.getProperties(properties);
  };

  Ext_fx_easing_EaseOut.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_easing_EaseOut.EVENTS());
    return Ext_fx_easing_Linear.getEvents(events);
  };

  _createClass(Ext_fx_easing_EaseOut, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_easing_Linear.observedAttributes;
      Ext_fx_easing_EaseOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_easing_EaseOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_easing_EaseOut(properties, events) {
    return _Ext_fx_easing_Linear.call(this, properties.concat(Ext_fx_easing_EaseOut.PROPERTIES()), events.concat(Ext_fx_easing_EaseOut.EVENTS())) || this;
  }

  var _proto = Ext_fx_easing_EaseOut.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_easing_Linear.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_easing_Linear.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_easing_EaseOut;
}(Ext_fx_easing_Linear);

export { Ext_fx_easing_EaseOut as default };