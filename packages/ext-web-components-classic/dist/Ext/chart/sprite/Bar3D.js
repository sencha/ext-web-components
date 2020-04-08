import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Sprite from '../../../Ext/draw/sprite/Sprite.js';

var Ext_chart_sprite_Bar3D = /*#__PURE__*/function (_Ext_draw_sprite_Spri) {
  _inheritsLoose(Ext_chart_sprite_Bar3D, _Ext_draw_sprite_Spri);

  Ext_chart_sprite_Bar3D.PROPERTIES = function PROPERTIES() {
    return ['animation', 'brightnessFactor', 'colorSpread', 'depth', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'height', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'orientation', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'saturationFactor', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'showStroke', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'width', 'x', 'y', 'zIndex'];
  };

  Ext_chart_sprite_Bar3D.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_sprite_Bar3D.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_sprite_Bar3D.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  };

  Ext_chart_sprite_Bar3D.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_sprite_Bar3D.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  };

  _createClass(Ext_chart_sprite_Bar3D, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Spri.observedAttributes;
      Ext_chart_sprite_Bar3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_sprite_Bar3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_sprite_Bar3D(properties, events) {
    return _Ext_draw_sprite_Spri.call(this, properties.concat(Ext_chart_sprite_Bar3D.PROPERTIES()), events.concat(Ext_chart_sprite_Bar3D.EVENTS())) || this;
  }

  var _proto = Ext_chart_sprite_Bar3D.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Spri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Spri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_sprite_Bar3D;
}(Ext_draw_sprite_Sprite);

export { Ext_chart_sprite_Bar3D as default };