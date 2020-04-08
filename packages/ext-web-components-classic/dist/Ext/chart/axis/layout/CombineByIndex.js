import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_layout_Discrete from '../../../../Ext/chart/axis/layout/Discrete.js';

var Ext_chart_axis_layout_CombineByIndex = /*#__PURE__*/function (_Ext_chart_axis_layou) {
  _inheritsLoose(Ext_chart_axis_layout_CombineByIndex, _Ext_chart_axis_layou);

  Ext_chart_axis_layout_CombineByIndex.PROPERTIES = function PROPERTIES() {
    return ['axis', 'listeners'];
  };

  Ext_chart_axis_layout_CombineByIndex.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_axis_layout_CombineByIndex.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_CombineByIndex.PROPERTIES());
    return Ext_chart_axis_layout_Discrete.getProperties(properties);
  };

  Ext_chart_axis_layout_CombineByIndex.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_CombineByIndex.EVENTS());
    return Ext_chart_axis_layout_Discrete.getEvents(events);
  };

  _createClass(Ext_chart_axis_layout_CombineByIndex, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_layou.observedAttributes;
      Ext_chart_axis_layout_CombineByIndex.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_layout_CombineByIndex.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_layout_CombineByIndex(properties, events) {
    return _Ext_chart_axis_layou.call(this, properties.concat(Ext_chart_axis_layout_CombineByIndex.PROPERTIES()), events.concat(Ext_chart_axis_layout_CombineByIndex.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_layout_CombineByIndex.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_layou.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_layou.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_layout_CombineByIndex;
}(Ext_chart_axis_layout_Discrete);

export { Ext_chart_axis_layout_CombineByIndex as default };