import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Ellipse from '../../../Ext/draw/sprite/Ellipse.js';

var Ext_draw_sprite_EllipticalArc = /*#__PURE__*/function (_Ext_draw_sprite_Elli) {
  _inheritsLoose(Ext_draw_sprite_EllipticalArc, _Ext_draw_sprite_Elli);

  Ext_draw_sprite_EllipticalArc.PROPERTIES = function PROPERTIES() {
    return ['animation', 'anticlockwise', 'axisRotation', 'cx', 'cy', 'dirty', 'endAngle', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'path', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'rx', 'ry', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startAngle', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_draw_sprite_EllipticalArc.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_sprite_EllipticalArc.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_EllipticalArc.PROPERTIES());
    return Ext_draw_sprite_Ellipse.getProperties(properties);
  };

  Ext_draw_sprite_EllipticalArc.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_EllipticalArc.EVENTS());
    return Ext_draw_sprite_Ellipse.getEvents(events);
  };

  _createClass(Ext_draw_sprite_EllipticalArc, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Elli.observedAttributes;
      Ext_draw_sprite_EllipticalArc.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_EllipticalArc.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_EllipticalArc(properties, events) {
    return _Ext_draw_sprite_Elli.call(this, properties.concat(Ext_draw_sprite_EllipticalArc.PROPERTIES()), events.concat(Ext_draw_sprite_EllipticalArc.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_EllipticalArc.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Elli.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Elli.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_EllipticalArc;
}(Ext_draw_sprite_Ellipse);

export { Ext_draw_sprite_EllipticalArc as default };