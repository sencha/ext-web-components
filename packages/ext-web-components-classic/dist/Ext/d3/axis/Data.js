import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_axis_Axis from '../../../Ext/d3/axis/Axis.js';

var Ext_d3_axis_Data = /*#__PURE__*/function (_Ext_d3_axis_Axis) {
  _inheritsLoose(Ext_d3_axis_Data, _Ext_d3_axis_Axis);

  Ext_d3_axis_Data.PROPERTIES = function PROPERTIES() {
    return ['axis', 'component', 'field', 'listeners', 'parent', 'scale', 'step', 'title'];
  };

  Ext_d3_axis_Data.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_d3_axis_Data.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_axis_Data.PROPERTIES());
    return Ext_d3_axis_Axis.getProperties(properties);
  };

  Ext_d3_axis_Data.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_axis_Data.EVENTS());
    return Ext_d3_axis_Axis.getEvents(events);
  };

  _createClass(Ext_d3_axis_Data, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_axis_Axis.observedAttributes;
      Ext_d3_axis_Data.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_axis_Data.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_axis_Data(properties, events) {
    return _Ext_d3_axis_Axis.call(this, properties.concat(Ext_d3_axis_Data.PROPERTIES()), events.concat(Ext_d3_axis_Data.EVENTS())) || this;
  }

  var _proto = Ext_d3_axis_Data.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_axis_Axis.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_axis_Axis.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_axis_Data;
}(Ext_d3_axis_Axis);

export { Ext_d3_axis_Data as default };