import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Rect from '../../../Ext/draw/sprite/Rect.js';

var Ext_draw_sprite_Image = /*#__PURE__*/function (_Ext_draw_sprite_Rect) {
  _inheritsLoose(Ext_draw_sprite_Image, _Ext_draw_sprite_Rect);

  Ext_draw_sprite_Image.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'height', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'path', 'radius', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'src', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'width', 'x', 'y', 'zIndex'];
  };

  Ext_draw_sprite_Image.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_sprite_Image.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Image.PROPERTIES());
    return Ext_draw_sprite_Rect.getProperties(properties);
  };

  Ext_draw_sprite_Image.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_Image.EVENTS());
    return Ext_draw_sprite_Rect.getEvents(events);
  };

  _createClass(Ext_draw_sprite_Image, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Rect.observedAttributes;
      Ext_draw_sprite_Image.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_Image.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_Image(properties, events) {
    return _Ext_draw_sprite_Rect.call(this, properties.concat(Ext_draw_sprite_Image.PROPERTIES()), events.concat(Ext_draw_sprite_Image.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_Image.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Rect.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Rect.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_Image;
}(Ext_draw_sprite_Rect);

export { Ext_draw_sprite_Image as default };