import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_draw_gradient_GradientDefinition = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_draw_gradient_GradientDefinition, _Ext_Base);

  Ext_draw_gradient_GradientDefinition.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_draw_gradient_GradientDefinition.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_gradient_GradientDefinition.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_gradient_GradientDefinition.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_draw_gradient_GradientDefinition.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_gradient_GradientDefinition.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_draw_gradient_GradientDefinition, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_draw_gradient_GradientDefinition.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_gradient_GradientDefinition.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_gradient_GradientDefinition(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_draw_gradient_GradientDefinition.PROPERTIES()), events.concat(Ext_draw_gradient_GradientDefinition.EVENTS())) || this;
  }

  var _proto = Ext_draw_gradient_GradientDefinition.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_gradient_GradientDefinition;
}(Ext_Base);

export { Ext_draw_gradient_GradientDefinition as default };