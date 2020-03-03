import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_sprite_Cartesian from '../../../../Ext/chart/series/sprite/Cartesian.js';

var Ext_chart_series_sprite_Aggregative = /*#__PURE__*/function (_Ext_chart_series_spr) {
  _inheritsLoose(Ext_chart_series_sprite_Aggregative, _Ext_chart_series_spr);

  Ext_chart_series_sprite_Aggregative.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dataClose', 'dataHigh', 'dataLow', 'dataMaxX', 'dataMaxY', 'dataMinX', 'dataMinY', 'dataOpen', 'dataX', 'dataY', 'dirty', 'field', 'fillOpacity', 'fillStyle', 'flipXY', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'labelOverflowPadding', 'labels', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rangeX', 'rangeY', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'selectionTolerance', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'store', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_series_sprite_Aggregative.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_sprite_Aggregative.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Aggregative.PROPERTIES());
    return Ext_chart_series_sprite_Cartesian.getProperties(properties);
  };

  Ext_chart_series_sprite_Aggregative.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Aggregative.EVENTS());
    return Ext_chart_series_sprite_Cartesian.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_Aggregative, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_spr.observedAttributes;
      Ext_chart_series_sprite_Aggregative.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_Aggregative.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_Aggregative(properties, events) {
    return _Ext_chart_series_spr.call(this, properties.concat(Ext_chart_series_sprite_Aggregative.PROPERTIES()), events.concat(Ext_chart_series_sprite_Aggregative.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_Aggregative.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_spr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_spr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_Aggregative;
}(Ext_chart_series_sprite_Cartesian);

export { Ext_chart_series_sprite_Aggregative as default };