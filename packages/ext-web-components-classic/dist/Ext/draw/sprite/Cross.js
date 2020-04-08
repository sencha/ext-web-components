import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Path from '../../../Ext/draw/sprite/Path.js';

var Ext_draw_sprite_Cross = /*#__PURE__*/function (_Ext_draw_sprite_Path) {
  _inheritsLoose(Ext_draw_sprite_Cross, _Ext_draw_sprite_Path);

  Ext_draw_sprite_Cross.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'path', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'size', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_draw_sprite_Cross.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_draw_sprite_Cross.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Cross.PROPERTIES());
    return Ext_draw_sprite_Path.getProperties(properties);
  };

  Ext_draw_sprite_Cross.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_Cross.EVENTS());
    return Ext_draw_sprite_Path.getEvents(events);
  };

  _createClass(Ext_draw_sprite_Cross, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Path.observedAttributes;
      Ext_draw_sprite_Cross.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_Cross.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_Cross(properties, events) {
    return _Ext_draw_sprite_Path.call(this, properties.concat(Ext_draw_sprite_Cross.PROPERTIES()), events.concat(Ext_draw_sprite_Cross.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_Cross.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Path.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Path.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_Cross;
}(Ext_draw_sprite_Path);

export { Ext_draw_sprite_Cross as default };