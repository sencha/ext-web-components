import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_layout_Layout from '../../../../Ext/chart/axis/layout/Layout.js';

var Ext_chart_axis_layout_Continuous = /*#__PURE__*/function (_Ext_chart_axis_layou) {
  _inheritsLoose(Ext_chart_axis_layout_Continuous, _Ext_chart_axis_layou);

  Ext_chart_axis_layout_Continuous.PROPERTIES = function PROPERTIES() {
    return ['axis', 'listeners'];
  };

  Ext_chart_axis_layout_Continuous.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_layout_Continuous.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_Continuous.PROPERTIES());
    return Ext_chart_axis_layout_Layout.getProperties(properties);
  };

  Ext_chart_axis_layout_Continuous.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_Continuous.EVENTS());
    return Ext_chart_axis_layout_Layout.getEvents(events);
  };

  _createClass(Ext_chart_axis_layout_Continuous, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_layou.observedAttributes;
      Ext_chart_axis_layout_Continuous.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_layout_Continuous.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_layout_Continuous(properties, events) {
    return _Ext_chart_axis_layou.call(this, properties.concat(Ext_chart_axis_layout_Continuous.PROPERTIES()), events.concat(Ext_chart_axis_layout_Continuous.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_layout_Continuous.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_layou.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_layou.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_layout_Continuous;
}(Ext_chart_axis_layout_Layout);

export { Ext_chart_axis_layout_Continuous as default };