import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_gradient_Gradient from '../../../Ext/draw/gradient/Gradient.js';

var Ext_draw_gradient_Radial = /*#__PURE__*/function (_Ext_draw_gradient_Gr) {
  _inheritsLoose(Ext_draw_gradient_Radial, _Ext_draw_gradient_Gr);

  Ext_draw_gradient_Radial.PROPERTIES = function PROPERTIES() {
    return ['end', 'start', 'stops'];
  };

  Ext_draw_gradient_Radial.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_gradient_Radial.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_gradient_Radial.PROPERTIES());
    return Ext_draw_gradient_Gradient.getProperties(properties);
  };

  Ext_draw_gradient_Radial.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_gradient_Radial.EVENTS());
    return Ext_draw_gradient_Gradient.getEvents(events);
  };

  _createClass(Ext_draw_gradient_Radial, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_gradient_Gr.observedAttributes;
      Ext_draw_gradient_Radial.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_gradient_Radial.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_gradient_Radial(properties, events) {
    return _Ext_draw_gradient_Gr.call(this, properties.concat(Ext_draw_gradient_Radial.PROPERTIES()), events.concat(Ext_draw_gradient_Radial.EVENTS())) || this;
  }

  var _proto = Ext_draw_gradient_Radial.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_gradient_Gr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_gradient_Gr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_gradient_Radial;
}(Ext_draw_gradient_Gradient);

export { Ext_draw_gradient_Radial as default };