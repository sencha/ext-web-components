import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Sector from '../../../../Ext/draw/sprite/Sector.js';

var Ext_chart_series_sprite_PieSlice = /*#__PURE__*/function (_Ext_draw_sprite_Sect) {
  _inheritsLoose(Ext_chart_series_sprite_PieSlice, _Ext_draw_sprite_Sect);

  Ext_chart_series_sprite_PieSlice.PROPERTIES = function PROPERTIES() {
    return ['animation', 'centerX', 'centerY', 'dirty', 'doCallout', 'endAngle', 'endRho', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'label', 'labelOverflowPadding', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'margin', 'miterLimit', 'parent', 'path', 'rendererData', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startAngle', 'startRho', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_series_sprite_PieSlice.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_sprite_PieSlice.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_PieSlice.PROPERTIES());
    return Ext_draw_sprite_Sector.getProperties(properties);
  };

  Ext_chart_series_sprite_PieSlice.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_PieSlice.EVENTS());
    return Ext_draw_sprite_Sector.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_PieSlice, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Sect.observedAttributes;
      Ext_chart_series_sprite_PieSlice.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_PieSlice.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_PieSlice(properties, events) {
    return _Ext_draw_sprite_Sect.call(this, properties.concat(Ext_chart_series_sprite_PieSlice.PROPERTIES()), events.concat(Ext_chart_series_sprite_PieSlice.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_PieSlice.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Sect.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Sect.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_PieSlice;
}(Ext_draw_sprite_Sector);

export { Ext_chart_series_sprite_PieSlice as default };