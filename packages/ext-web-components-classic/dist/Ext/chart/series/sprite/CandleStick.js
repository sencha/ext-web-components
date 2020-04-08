import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_sprite_Aggregative from '../../../../Ext/chart/series/sprite/Aggregative.js';

var Ext_chart_series_sprite_CandleStick = /*#__PURE__*/function (_Ext_chart_series_spr) {
  _inheritsLoose(Ext_chart_series_sprite_CandleStick, _Ext_chart_series_spr);

  Ext_chart_series_sprite_CandleStick.PROPERTIES = function PROPERTIES() {
    return ['animation', 'barWidth', 'dataClose', 'dataHigh', 'dataLow', 'dataMaxX', 'dataMaxY', 'dataMinX', 'dataMinY', 'dataOpen', 'dataX', 'dataY', 'dirty', 'field', 'fillOpacity', 'fillStyle', 'flipXY', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'labelOverflowPadding', 'labels', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'ohlcType', 'padding', 'parent', 'rangeX', 'rangeY', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'selectionTolerance', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'store', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_series_sprite_CandleStick.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_sprite_CandleStick.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_CandleStick.PROPERTIES());
    return Ext_chart_series_sprite_Aggregative.getProperties(properties);
  };

  Ext_chart_series_sprite_CandleStick.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_CandleStick.EVENTS());
    return Ext_chart_series_sprite_Aggregative.getEvents(events);
  };

  _createClass(Ext_chart_series_sprite_CandleStick, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_spr.observedAttributes;
      Ext_chart_series_sprite_CandleStick.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_sprite_CandleStick.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_sprite_CandleStick(properties, events) {
    return _Ext_chart_series_spr.call(this, properties.concat(Ext_chart_series_sprite_CandleStick.PROPERTIES()), events.concat(Ext_chart_series_sprite_CandleStick.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_sprite_CandleStick.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_spr.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_spr.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_sprite_CandleStick;
}(Ext_chart_series_sprite_Aggregative);

export { Ext_chart_series_sprite_CandleStick as default };