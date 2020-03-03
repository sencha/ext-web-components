import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Rect from '../../../../Ext/draw/sprite/Rect.js';

var Ext_chart_legend_sprite_Border = /*#__PURE__*/function (_Ext_draw_sprite_Rect) {
  _inheritsLoose(Ext_chart_legend_sprite_Border, _Ext_draw_sprite_Rect);

  Ext_chart_legend_sprite_Border.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'height', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'path', 'radius', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'width', 'x', 'y', 'zIndex'];
  };

  Ext_chart_legend_sprite_Border.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_legend_sprite_Border.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_legend_sprite_Border.PROPERTIES());
    return Ext_draw_sprite_Rect.getProperties(properties);
  };

  Ext_chart_legend_sprite_Border.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_legend_sprite_Border.EVENTS());
    return Ext_draw_sprite_Rect.getEvents(events);
  };

  _createClass(Ext_chart_legend_sprite_Border, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Rect.observedAttributes;
      Ext_chart_legend_sprite_Border.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_legend_sprite_Border.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_legend_sprite_Border(properties, events) {
    return _Ext_draw_sprite_Rect.call(this, properties.concat(Ext_chart_legend_sprite_Border.PROPERTIES()), events.concat(Ext_chart_legend_sprite_Border.EVENTS())) || this;
  }

  var _proto = Ext_chart_legend_sprite_Border.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Rect.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Rect.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_legend_sprite_Border;
}(Ext_draw_sprite_Rect);

export { Ext_chart_legend_sprite_Border as default };