import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_chart_axis_Axis = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_chart_axis_Axis, _Ext_Base);

  Ext_chart_axis_Axis.PROPERTIES = function PROPERTIES() {
    return ['adjustByMajorUnit', 'background', 'center', 'chart', 'expandRangeBy', 'fields', 'floating', 'grid', 'hidden', 'id', 'label', 'layout', 'length', 'limits', 'linkedTo', 'listeners', 'majorTickSteps', 'margin', 'maximum', 'maxZoom', 'minimum', 'minorTickSteps', 'minZoom', 'needHighPrecision', 'position', 'radius', 'reconcileRange', 'renderer', 'rotation', 'segmenter', 'style', 'title', 'titleMargin', 'totalAngle', 'visibleRange'];
  };

  Ext_chart_axis_Axis.EVENTS = function EVENTS() {
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

  Ext_chart_axis_Axis.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_Axis.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_chart_axis_Axis.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_Axis.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_chart_axis_Axis, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_chart_axis_Axis.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_Axis.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_Axis(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_chart_axis_Axis.PROPERTIES()), events.concat(Ext_chart_axis_Axis.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_Axis.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_Axis;
}(Ext_Base);

export { Ext_chart_axis_Axis as default };