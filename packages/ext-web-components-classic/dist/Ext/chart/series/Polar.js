import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_Series from '../../../Ext/chart/series/Series.js';

var Ext_chart_series_Polar = /*#__PURE__*/function (_Ext_chart_series_Ser) {
  _inheritsLoose(Ext_chart_series_Polar, _Ext_chart_series_Ser);

  Ext_chart_series_Polar.PROPERTIES = function PROPERTIES() {
    return ['angleField', 'animation', 'background', 'bind', 'center', 'chart', 'colors', 'controller', 'defaultListenerScope', 'hidden', 'highlight', 'highlightCfg', 'itemInstancing', 'label', 'labelOverflowPadding', 'listeners', 'marker', 'markerSubStyle', 'nameable', 'offsetX', 'offsetY', 'overlaySurface', 'publishes', 'radius', 'radiusField', 'reference', 'renderer', 'rotation', 'session', 'shareableName', 'showInLegend', 'showMarkers', 'store', 'style', 'subStyle', 'surface', 'theme', 'themeStyle', 'title', 'tooltip', 'triggerAfterDraw', 'twoWayBindable', 'useDarkerStrokeColor', 'viewModel', 'xField', 'yField'];
  };

  Ext_chart_series_Polar.EVENTS = function EVENTS() {
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

  Ext_chart_series_Polar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_Polar.PROPERTIES());
    return Ext_chart_series_Series.getProperties(properties);
  };

  Ext_chart_series_Polar.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_Polar.EVENTS());
    return Ext_chart_series_Series.getEvents(events);
  };

  _createClass(Ext_chart_series_Polar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_Ser.observedAttributes;
      Ext_chart_series_Polar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_Polar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_Polar(properties, events) {
    return _Ext_chart_series_Ser.call(this, properties.concat(Ext_chart_series_Polar.PROPERTIES()), events.concat(Ext_chart_series_Polar.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_Polar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_Ser.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_Ser.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_Polar;
}(Ext_chart_series_Series);

export { Ext_chart_series_Polar as default };