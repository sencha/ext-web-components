import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Sprite from '../../../Ext/draw/sprite/Sprite.js';

var Ext_draw_sprite_Text = /*#__PURE__*/function (_Ext_draw_sprite_Spri) {
  _inheritsLoose(Ext_draw_sprite_Text, _Ext_draw_sprite_Spri);

  Ext_draw_sprite_Text.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'font', 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant', 'fontWeight', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'preciseMeasurement', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'text', 'textAlign', 'textBaseline', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'x', 'y', 'zIndex'];
  };

  Ext_draw_sprite_Text.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_sprite_Text.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Text.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  };

  Ext_draw_sprite_Text.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_Text.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  };

  _createClass(Ext_draw_sprite_Text, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Spri.observedAttributes;
      Ext_draw_sprite_Text.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_Text.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_Text(properties, events) {
    return _Ext_draw_sprite_Spri.call(this, properties.concat(Ext_draw_sprite_Text.PROPERTIES()), events.concat(Ext_draw_sprite_Text.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_Text.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Spri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Spri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_Text;
}(Ext_draw_sprite_Sprite);

export { Ext_draw_sprite_Text as default };