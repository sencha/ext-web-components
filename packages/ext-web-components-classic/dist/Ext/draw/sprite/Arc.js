import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Circle from '../../../Ext/draw/sprite/Circle.js';

var Ext_draw_sprite_Arc = /*#__PURE__*/function (_Ext_draw_sprite_Circ) {
  _inheritsLoose(Ext_draw_sprite_Arc, _Ext_draw_sprite_Circ);

  Ext_draw_sprite_Arc.PROPERTIES = function PROPERTIES() {
    return ['animation', 'anticlockwise', 'cx', 'cy', 'dirty', 'endAngle', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'path', 'r', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startAngle', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_draw_sprite_Arc.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_sprite_Arc.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Arc.PROPERTIES());
    return Ext_draw_sprite_Circle.getProperties(properties);
  };

  Ext_draw_sprite_Arc.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_Arc.EVENTS());
    return Ext_draw_sprite_Circle.getEvents(events);
  };

  _createClass(Ext_draw_sprite_Arc, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Circ.observedAttributes;
      Ext_draw_sprite_Arc.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_Arc.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_Arc(properties, events) {
    return _Ext_draw_sprite_Circ.call(this, properties.concat(Ext_draw_sprite_Arc.PROPERTIES()), events.concat(Ext_draw_sprite_Arc.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_Arc.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Circ.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Circ.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_Arc;
}(Ext_draw_sprite_Circle);

export { Ext_draw_sprite_Arc as default };