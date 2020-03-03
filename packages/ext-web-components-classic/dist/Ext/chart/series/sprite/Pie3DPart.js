import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Path from '../../../../Ext/draw/sprite/Path.js';

var Ext_chart_series_sprite_Pie3DPart = /*#__PURE__*/function (_Ext_draw_sprite_Path) {
  _inheritsLoose(Ext_chart_series_sprite_Pie3DPart, _Ext_draw_sprite_Path);

  Ext_chart_series_sprite_Pie3DPart.PROPERTIES = function PROPERTIES() {
    return ['animation', 'baseColor', 'baseRotation', 'bevelWidth', 'centerX', 'centerY', 'colorSpread', 'dirty', 'distortion', 'endAngle', 'endRho', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'label', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'margin', 'miterLimit', 'parent', 'part', 'path', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startAngle', 'startRho', 'strokeOpacity', 'strokeStyle', 'surface', 'thickness', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_series_sprite_Pie3DPart.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_sprite_Pie3DPart.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Pie3DPart.PROPERTIES());
    return Ext_draw_sprite_Path.getProperties(properties);
  };

  Ext_chart_series_sprite_Pie3DPart.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Pie3DPart.EVENTS());
    return Ext_draw_sprite_Path.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_Pie3DPart, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Path.observedAttributes;
      Ext_chart_series_sprite_Pie3DPart.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_Pie3DPart.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_Pie3DPart(properties, events) {
    return _Ext_draw_sprite_Path.call(this, properties.concat(Ext_chart_series_sprite_Pie3DPart.PROPERTIES()), events.concat(Ext_chart_series_sprite_Pie3DPart.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_Pie3DPart.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Path.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Path.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_Pie3DPart;
}(Ext_draw_sprite_Path);

export { Ext_chart_series_sprite_Pie3DPart as default };