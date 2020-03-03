import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_sprite_Bar from '../../../../Ext/chart/series/sprite/Bar.js';

var Ext_chart_series_sprite_Bar3D = /*#__PURE__*/function (_Ext_chart_series_spr) {
  _inheritsLoose(Ext_chart_series_sprite_Bar3D, _Ext_chart_series_spr);

  Ext_chart_series_sprite_Bar3D.PROPERTIES = function PROPERTIES() {
    return ['animation', 'brightnessFactor', 'colorSpread', 'dataMaxX', 'dataMaxY', 'dataMinX', 'dataMinY', 'dataStartY', 'dataX', 'dataY', 'dirty', 'field', 'fillOpacity', 'fillStyle', 'flipXY', 'globalAlpha', 'globalCompositeOperation', 'groupCount', 'groupOffset', 'hidden', 'inGroupGapWidth', 'labelOverflowPadding', 'labels', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'maxBarWidth', 'minBarWidth', 'minGapWidth', 'miterLimit', 'parent', 'radius', 'rangeX', 'rangeY', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'saturationFactor', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'selectionTolerance', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'store', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_series_sprite_Bar3D.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_sprite_Bar3D.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Bar3D.PROPERTIES());
    return Ext_chart_series_sprite_Bar.getProperties(properties);
  };

  Ext_chart_series_sprite_Bar3D.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Bar3D.EVENTS());
    return Ext_chart_series_sprite_Bar.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_Bar3D, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_spr.observedAttributes;
      Ext_chart_series_sprite_Bar3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_Bar3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_Bar3D(properties, events) {
    return _Ext_chart_series_spr.call(this, properties.concat(Ext_chart_series_sprite_Bar3D.PROPERTIES()), events.concat(Ext_chart_series_sprite_Bar3D.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_Bar3D.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_spr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_spr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_Bar3D;
}(Ext_chart_series_sprite_Bar);

export { Ext_chart_series_sprite_Bar3D as default };