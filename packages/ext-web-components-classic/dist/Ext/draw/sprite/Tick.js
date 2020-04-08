import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Line from '../../../Ext/draw/sprite/Line.js';

var Ext_draw_sprite_Tick = /*#__PURE__*/function (_Ext_draw_sprite_Line) {
  _inheritsLoose(Ext_draw_sprite_Tick, _Ext_draw_sprite_Line);

  Ext_draw_sprite_Tick.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'size', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'x', 'y', 'zIndex'];
  };

  Ext_draw_sprite_Tick.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_sprite_Tick.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Tick.PROPERTIES());
    return Ext_draw_sprite_Line.getProperties(properties);
  };

  Ext_draw_sprite_Tick.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_Tick.EVENTS());
    return Ext_draw_sprite_Line.getEvents(events);
  };

  _createClass(Ext_draw_sprite_Tick, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Line.observedAttributes;
      Ext_draw_sprite_Tick.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_Tick.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_Tick(properties, events) {
    return _Ext_draw_sprite_Line.call(this, properties.concat(Ext_draw_sprite_Tick.PROPERTIES()), events.concat(Ext_draw_sprite_Tick.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_Tick.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Line.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Line.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_Tick;
}(Ext_draw_sprite_Line);

export { Ext_draw_sprite_Tick as default };