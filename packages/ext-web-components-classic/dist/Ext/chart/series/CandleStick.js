import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_Cartesian from '../../../Ext/chart/series/Cartesian.js';

var Ext_chart_series_CandleStick = /*#__PURE__*/function (_Ext_chart_series_Car) {
  _inheritsLoose(Ext_chart_series_CandleStick, _Ext_chart_series_Car);

  Ext_chart_series_CandleStick.PROPERTIES = function PROPERTIES() {
    return ['animation', 'background', 'bind', 'chart', 'closeField', 'colors', 'controller', 'defaultListenerScope', 'hidden', 'highField', 'highlight', 'highlightCfg', 'itemInstancing', 'label', 'labelOverflowPadding', 'listeners', 'lowField', 'marker', 'markerSubStyle', 'nameable', 'openField', 'overlaySurface', 'publishes', 'reference', 'renderer', 'session', 'shareableName', 'showInLegend', 'showMarkers', 'store', 'style', 'subStyle', 'surface', 'theme', 'themeStyle', 'title', 'tooltip', 'triggerAfterDraw', 'twoWayBindable', 'useDarkerStrokeColor', 'viewModel', 'xAxis', 'xField', 'yAxis', 'yField'];
  };

  Ext_chart_series_CandleStick.EVENTS = function EVENTS() {
    return [{
      name: 'chartattached',
      parameters: 'chart,series'
    }, {
      name: 'chartdetached',
      parameters: 'chart,series'
    }, {
      name: 'itemclick',
      parameters: 'series,item,event'
    }, {
      name: 'itemdblclick',
      parameters: 'series,item,event'
    }, {
      name: 'itemmousedown',
      parameters: 'series,item,event'
    }, {
      name: 'itemmousemove',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseout',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseover',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseup',
      parameters: 'series,item,event'
    }, {
      name: 'itemtap',
      parameters: 'series,item,event'
    }, {
      name: 'storechange',
      parameters: 'series,newStore,oldStore'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_CandleStick.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_CandleStick.PROPERTIES());
    return Ext_chart_series_Cartesian.getProperties(properties);
  };

  Ext_chart_series_CandleStick.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_CandleStick.EVENTS());
    return Ext_chart_series_Cartesian.getEvents(events);
  };

  _createClass(Ext_chart_series_CandleStick, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_Car.observedAttributes;
      Ext_chart_series_CandleStick.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_CandleStick.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_CandleStick(properties, events) {
    return _Ext_chart_series_Car.call(this, properties.concat(Ext_chart_series_CandleStick.PROPERTIES()), events.concat(Ext_chart_series_CandleStick.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_CandleStick.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_Car.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_Car.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_CandleStick;
}(Ext_chart_series_Cartesian);

export { Ext_chart_series_CandleStick as default };