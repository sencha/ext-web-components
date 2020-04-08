import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_segmenter_Segmenter from '../../../../Ext/chart/axis/segmenter/Segmenter.js';

var Ext_chart_axis_segmenter_Numeric = /*#__PURE__*/function (_Ext_chart_axis_segme) {
  _inheritsLoose(Ext_chart_axis_segmenter_Numeric, _Ext_chart_axis_segme);

  Ext_chart_axis_segmenter_Numeric.PROPERTIES = function PROPERTIES() {
    return ['axis'];
  };

  Ext_chart_axis_segmenter_Numeric.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_segmenter_Numeric.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_segmenter_Numeric.PROPERTIES());
    return Ext_chart_axis_segmenter_Segmenter.getProperties(properties);
  };

  Ext_chart_axis_segmenter_Numeric.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_segmenter_Numeric.EVENTS());
    return Ext_chart_axis_segmenter_Segmenter.getEvents(events);
  };

  _createClass(Ext_chart_axis_segmenter_Numeric, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_segme.observedAttributes;
      Ext_chart_axis_segmenter_Numeric.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_segmenter_Numeric.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_segmenter_Numeric(properties, events) {
    return _Ext_chart_axis_segme.call(this, properties.concat(Ext_chart_axis_segmenter_Numeric.PROPERTIES()), events.concat(Ext_chart_axis_segmenter_Numeric.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_segmenter_Numeric.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_segme.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_segme.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_segmenter_Numeric;
}(Ext_chart_axis_segmenter_Segmenter);

export { Ext_chart_axis_segmenter_Numeric as default };