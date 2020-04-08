import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_theme_series_Series from '../../../../Ext/chart/theme/series/Series.js';

var Ext_chart_theme_series_CandleStick = /*#__PURE__*/function (_Ext_chart_theme_seri) {
  _inheritsLoose(Ext_chart_theme_series_CandleStick, _Ext_chart_theme_seri);

  Ext_chart_theme_series_CandleStick.PROPERTIES = function PROPERTIES() {
    return ['barWidth', 'fillOpacity', 'fillStyle', 'globalAlpha', 'labelOverflowPadding', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'ohlcType', 'padding', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'strokeOpacity', 'strokeStyle'];
  };

  Ext_chart_theme_series_CandleStick.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_theme_series_CandleStick.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_series_CandleStick.PROPERTIES());
    return Ext_chart_theme_series_Series.getProperties(properties);
  };

  Ext_chart_theme_series_CandleStick.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_theme_series_CandleStick.EVENTS());
    return Ext_chart_theme_series_Series.getEvents(events);
  };

  _createClass(Ext_chart_theme_series_CandleStick, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_theme_seri.observedAttributes;
      Ext_chart_theme_series_CandleStick.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_theme_series_CandleStick.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_theme_series_CandleStick(properties, events) {
    return _Ext_chart_theme_seri.call(this, properties.concat(Ext_chart_theme_series_CandleStick.PROPERTIES()), events.concat(Ext_chart_theme_series_CandleStick.EVENTS())) || this;
  }

  var _proto = Ext_chart_theme_series_CandleStick.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_theme_seri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_theme_seri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_theme_series_CandleStick;
}(Ext_chart_theme_series_Series);

export { Ext_chart_theme_series_CandleStick as default };