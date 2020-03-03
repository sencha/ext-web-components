import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_Axis from '../../../Ext/chart/axis/Axis.js';

var Ext_chart_axis_Numeric = /*#__PURE__*/function (_Ext_chart_axis_Axis) {
  _inheritsLoose(Ext_chart_axis_Numeric, _Ext_chart_axis_Axis);

  Ext_chart_axis_Numeric.PROPERTIES = function PROPERTIES() {
    return ['adjustByMajorUnit', 'background', 'center', 'chart', 'expandRangeBy', 'fields', 'floating', 'grid', 'hidden', 'id', 'label', 'layout', 'length', 'limits', 'linkedTo', 'listeners', 'majorTickSteps', 'margin', 'maximum', 'maxZoom', 'minimum', 'minorTickSteps', 'minZoom', 'needHighPrecision', 'position', 'radius', 'reconcileRange', 'renderer', 'rotation', 'segmenter', 'style', 'title', 'titleMargin', 'totalAngle', 'visibleRange'];
  };

  Ext_chart_axis_Numeric.EVENTS = function EVENTS() {
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

  Ext_chart_axis_Numeric.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_Numeric.PROPERTIES());
    return Ext_chart_axis_Axis.getProperties(properties);
  };

  Ext_chart_axis_Numeric.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_Numeric.EVENTS());
    return Ext_chart_axis_Axis.getEvents(events);
  };

  _createClass(Ext_chart_axis_Numeric, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_Axis.observedAttributes;
      Ext_chart_axis_Numeric.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_Numeric.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_Numeric(properties, events) {
    return _Ext_chart_axis_Axis.call(this, properties.concat(Ext_chart_axis_Numeric.PROPERTIES()), events.concat(Ext_chart_axis_Numeric.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_Numeric.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_Axis.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_Axis.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_Numeric;
}(Ext_chart_axis_Axis);

export { Ext_chart_axis_Numeric as default };