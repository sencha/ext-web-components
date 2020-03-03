import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_sprite_Polar from '../../../../Ext/chart/series/sprite/Polar.js';

var Ext_chart_series_sprite_Radar = /*#__PURE__*/function (_Ext_chart_series_spr) {
  _inheritsLoose(Ext_chart_series_sprite_Radar, _Ext_chart_series_spr);

  Ext_chart_series_sprite_Radar.PROPERTIES = function PROPERTIES() {
    return ['animation', 'baseRotation', 'centerX', 'centerY', 'dataMaxX', 'dataMaxY', 'dataMinX', 'dataMinY', 'dataX', 'dataY', 'dirty', 'endAngle', 'endRho', 'field', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'labelOverflowPadding', 'labels', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rangeX', 'rangeY', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startAngle', 'startRho', 'store', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_series_sprite_Radar.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_sprite_Radar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Radar.PROPERTIES());
    return Ext_chart_series_sprite_Polar.getProperties(properties);
  };

  Ext_chart_series_sprite_Radar.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Radar.EVENTS());
    return Ext_chart_series_sprite_Polar.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_Radar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_spr.observedAttributes;
      Ext_chart_series_sprite_Radar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_Radar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_Radar(properties, events) {
    return _Ext_chart_series_spr.call(this, properties.concat(Ext_chart_series_sprite_Radar.PROPERTIES()), events.concat(Ext_chart_series_sprite_Radar.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_Radar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_spr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_spr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_Radar;
}(Ext_chart_series_sprite_Polar);

export { Ext_chart_series_sprite_Radar as default };