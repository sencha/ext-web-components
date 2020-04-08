import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Sprite from '../../../Ext/draw/sprite/Sprite.js';

var Ext_draw_sprite_Composite = /*#__PURE__*/function (_Ext_draw_sprite_Spri) {
  _inheritsLoose(Ext_draw_sprite_Composite, _Ext_draw_sprite_Spri);

  Ext_draw_sprite_Composite.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_draw_sprite_Composite.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_sprite_Composite.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Composite.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  };

  Ext_draw_sprite_Composite.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_Composite.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  };

  _createClass(Ext_draw_sprite_Composite, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Spri.observedAttributes;
      Ext_draw_sprite_Composite.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_Composite.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_Composite(properties, events) {
    return _Ext_draw_sprite_Spri.call(this, properties.concat(Ext_draw_sprite_Composite.PROPERTIES()), events.concat(Ext_draw_sprite_Composite.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_Composite.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Spri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Spri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_Composite;
}(Ext_draw_sprite_Sprite);

export { Ext_draw_sprite_Composite as default };