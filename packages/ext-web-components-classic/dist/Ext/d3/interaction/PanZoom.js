import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_d3_interaction_Abstract from '../../../Ext/d3/interaction/Abstract.js';

var Ext_d3_interaction_PanZoom = /*#__PURE__*/function (_Ext_d3_interaction_A) {
  _inheritsLoose(Ext_d3_interaction_PanZoom, _Ext_d3_interaction_A);

  var _super = _createSuper(Ext_d3_interaction_PanZoom);

  Ext_d3_interaction_PanZoom.PROPERTIES = function PROPERTIES() {
    return ['component', 'contentRect', 'enabled', 'gestures', 'indicator', 'listeners', 'pan', 'viewportRect', 'zoom'];
  };

  Ext_d3_interaction_PanZoom.EVENTS = function EVENTS() {
    return [{
      name: 'destroy',
      parameters: 'interaction'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_d3_interaction_PanZoom.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_interaction_PanZoom.PROPERTIES());
    return Ext_d3_interaction_Abstract.getProperties(properties);
  };

  Ext_d3_interaction_PanZoom.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_interaction_PanZoom.EVENTS());
    return Ext_d3_interaction_Abstract.getEvents(events);
  };

  _createClass(Ext_d3_interaction_PanZoom, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_interaction_A.observedAttributes;
      Ext_d3_interaction_PanZoom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_interaction_PanZoom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_interaction_PanZoom(properties, events) {
    return _Ext_d3_interaction_A.call(this, properties.concat(Ext_d3_interaction_PanZoom.PROPERTIES()), events.concat(Ext_d3_interaction_PanZoom.EVENTS())) || this;
  }

  var _proto = Ext_d3_interaction_PanZoom.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_interaction_A.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_interaction_A.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_interaction_PanZoom;
}(Ext_d3_interaction_Abstract);

export { Ext_d3_interaction_PanZoom as default };