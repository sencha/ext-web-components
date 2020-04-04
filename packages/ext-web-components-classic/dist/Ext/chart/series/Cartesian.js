import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_chart_series_Series from '../../../Ext/chart/series/Series.js';

var Ext_chart_series_Cartesian = /*#__PURE__*/function (_Ext_chart_series_Ser) {
  _inheritsLoose(Ext_chart_series_Cartesian, _Ext_chart_series_Ser);

  var _super = _createSuper(Ext_chart_series_Cartesian);

  Ext_chart_series_Cartesian.PROPERTIES = function PROPERTIES() {
    return ['animation', 'background', 'bind', 'chart', 'colors', 'controller', 'defaultListenerScope', 'hidden', 'highlight', 'highlightCfg', 'itemInstancing', 'label', 'labelOverflowPadding', 'listeners', 'marker', 'markerSubStyle', 'nameable', 'overlaySurface', 'publishes', 'reference', 'renderer', 'session', 'shareableName', 'showInLegend', 'showMarkers', 'store', 'style', 'subStyle', 'surface', 'theme', 'themeStyle', 'title', 'tooltip', 'triggerAfterDraw', 'twoWayBindable', 'useDarkerStrokeColor', 'viewModel', 'xAxis', 'xField', 'yAxis', 'yField'];
  };

  Ext_chart_series_Cartesian.EVENTS = function EVENTS() {
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

  Ext_chart_series_Cartesian.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_Cartesian.PROPERTIES());
    return Ext_chart_series_Series.getProperties(properties);
  };

  Ext_chart_series_Cartesian.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_Cartesian.EVENTS());
    return Ext_chart_series_Series.getEvents(events);
  };

  _createClass(Ext_chart_series_Cartesian, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_Ser.observedAttributes;
      Ext_chart_series_Cartesian.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_Cartesian.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_series_Cartesian(properties, events) {
    return _Ext_chart_series_Ser.call(this, properties.concat(Ext_chart_series_Cartesian.PROPERTIES()), events.concat(Ext_chart_series_Cartesian.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_Cartesian.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_Ser.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_Ser.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_series_Cartesian;
}(Ext_chart_series_Series);

export { Ext_chart_series_Cartesian as default };