import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_gradient_Gradient from '../../../Ext/draw/gradient/Gradient.js';

var Ext_draw_gradient_Linear = /*#__PURE__*/function (_Ext_draw_gradient_Gr) {
  _inheritsLoose(Ext_draw_gradient_Linear, _Ext_draw_gradient_Gr);

  Ext_draw_gradient_Linear.PROPERTIES = function PROPERTIES() {
    return ['degrees', 'radians', 'stops'];
  };

  Ext_draw_gradient_Linear.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_gradient_Linear.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_gradient_Linear.PROPERTIES());
    return Ext_draw_gradient_Gradient.getProperties(properties);
  };

  Ext_draw_gradient_Linear.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_gradient_Linear.EVENTS());
    return Ext_draw_gradient_Gradient.getEvents(events);
  };

  _createClass(Ext_draw_gradient_Linear, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_gradient_Gr.observedAttributes;
      Ext_draw_gradient_Linear.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_gradient_Linear.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_gradient_Linear(properties, events) {
    return _Ext_draw_gradient_Gr.call(this, properties.concat(Ext_draw_gradient_Linear.PROPERTIES()), events.concat(Ext_draw_gradient_Linear.EVENTS())) || this;
  }

  var _proto = Ext_draw_gradient_Linear.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_gradient_Gr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_gradient_Gr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_gradient_Linear;
}(Ext_draw_gradient_Gradient);

export { Ext_draw_gradient_Linear as default };