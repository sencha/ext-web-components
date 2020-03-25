import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_fx_animation_Slide from '../../../Ext/fx/animation/Slide.js';

var Ext_fx_animation_SlideOut = /*#__PURE__*/function (_Ext_fx_animation_Sli) {
  _inheritsLoose(Ext_fx_animation_SlideOut, _Ext_fx_animation_Sli);

  var _super = _createSuper(Ext_fx_animation_SlideOut);

  Ext_fx_animation_SlideOut.PROPERTIES = function PROPERTIES() {
    return ['before', 'direction', 'easing', 'listeners', 'offset', 'out'];
  };

  Ext_fx_animation_SlideOut.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_animation_SlideOut.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_SlideOut.PROPERTIES());
    return Ext_fx_animation_Slide.getProperties(properties);
  };

  Ext_fx_animation_SlideOut.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_SlideOut.EVENTS());
    return Ext_fx_animation_Slide.getEvents(events);
  };

  _createClass(Ext_fx_animation_SlideOut, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_animation_Sli.observedAttributes;
      Ext_fx_animation_SlideOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_SlideOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_SlideOut(properties, events) {
    return _Ext_fx_animation_Sli.call(this, properties.concat(Ext_fx_animation_SlideOut.PROPERTIES()), events.concat(Ext_fx_animation_SlideOut.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_SlideOut.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_animation_Sli.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_animation_Sli.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_SlideOut;
}(Ext_fx_animation_Slide);

export { Ext_fx_animation_SlideOut as default };