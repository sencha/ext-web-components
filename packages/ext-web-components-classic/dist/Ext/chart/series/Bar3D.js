import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_Bar from '../../../Ext/chart/series/Bar.js';

var Ext_chart_series_Bar3D = /*#__PURE__*/function (_Ext_chart_series_Bar) {
  _inheritsLoose(Ext_chart_series_Bar3D, _Ext_chart_series_Bar);

  Ext_chart_series_Bar3D.PROPERTIES = function PROPERTIES() {
    return ['animation', 'background', 'bind', 'chart', 'colors', 'controller', 'defaultListenerScope', 'fullStack', 'fullStackTotal', 'hidden', 'highlight', 'highlightCfg', 'itemInstancing', 'label', 'labelOverflowPadding', 'listeners', 'marker', 'markerSubStyle', 'nameable', 'overlaySurface', 'publishes', 'reference', 'renderer', 'session', 'shareableName', 'showInLegend', 'showMarkers', 'splitStacks', 'stacked', 'store', 'style', 'subStyle', 'surface', 'theme', 'themeStyle', 'title', 'tooltip', 'triggerAfterDraw', 'twoWayBindable', 'useDarkerStrokeColor', 'viewModel', 'xAxis', 'xField', 'yAxis', 'yField'];
  };

  Ext_chart_series_Bar3D.EVENTS = function EVENTS() {
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

  Ext_chart_series_Bar3D.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_Bar3D.PROPERTIES());
    return Ext_chart_series_Bar.getProperties(properties);
  };

  Ext_chart_series_Bar3D.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_Bar3D.EVENTS());
    return Ext_chart_series_Bar.getEvents(events);
  };

  _createClass(Ext_chart_series_Bar3D, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_Bar.observedAttributes;
      Ext_chart_series_Bar3D.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_Bar3D.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_Bar3D(properties, events) {
    return _Ext_chart_series_Bar.call(this, properties.concat(Ext_chart_series_Bar3D.PROPERTIES()), events.concat(Ext_chart_series_Bar3D.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_Bar3D.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_Bar.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_Bar.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_Bar3D;
}(Ext_chart_series_Bar);

export { Ext_chart_series_Bar3D as default };