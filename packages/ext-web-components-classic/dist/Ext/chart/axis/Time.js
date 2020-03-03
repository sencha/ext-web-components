import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_Numeric from '../../../Ext/chart/axis/Numeric.js';

var Ext_chart_axis_Time = /*#__PURE__*/function (_Ext_chart_axis_Numer) {
  _inheritsLoose(Ext_chart_axis_Time, _Ext_chart_axis_Numer);

  Ext_chart_axis_Time.PROPERTIES = function PROPERTIES() {
    return ['adjustByMajorUnit', 'background', 'center', 'chart', 'dateFormat', 'expandRangeBy', 'fields', 'floating', 'fromDate', 'grid', 'hidden', 'id', 'label', 'layout', 'length', 'limits', 'linkedTo', 'listeners', 'majorTickSteps', 'margin', 'maximum', 'maxZoom', 'minimum', 'minorTickSteps', 'minZoom', 'needHighPrecision', 'position', 'radius', 'reconcileRange', 'renderer', 'rotation', 'segmenter', 'style', 'title', 'titleMargin', 'toDate', 'totalAngle', 'visibleRange'];
  };

  Ext_chart_axis_Time.EVENTS = function EVENTS() {
    return [{
      name: 'rangechange',
      parameters: 'axis,range,oldRange'
    }, {
      name: 'visiblerangechange',
      parameters: 'axis,visibleRange'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_Time.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_Time.PROPERTIES());
    return Ext_chart_axis_Numeric.getProperties(properties);
  };

  Ext_chart_axis_Time.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_Time.EVENTS());
    return Ext_chart_axis_Numeric.getEvents(events);
  };

  _createClass(Ext_chart_axis_Time, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_Numer.observedAttributes;
      Ext_chart_axis_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_Time(properties, events) {
    return _Ext_chart_axis_Numer.call(this, properties.concat(Ext_chart_axis_Time.PROPERTIES()), events.concat(Ext_chart_axis_Time.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_Time.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_Numer.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_Numer.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_Time;
}(Ext_chart_axis_Numeric);

export { Ext_chart_axis_Time as default };