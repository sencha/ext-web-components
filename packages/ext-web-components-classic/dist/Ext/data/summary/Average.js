import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_summary_Sum from '../../../Ext/data/summary/Sum.js';

var Ext_data_summary_Average = /*#__PURE__*/function (_Ext_data_summary_Sum) {
  _inheritsLoose(Ext_data_summary_Average, _Ext_data_summary_Sum);

  Ext_data_summary_Average.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_summary_Average.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_summary_Average.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_summary_Average.PROPERTIES());
    return Ext_data_summary_Sum.getProperties(properties);
  };

  Ext_data_summary_Average.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_summary_Average.EVENTS());
    return Ext_data_summary_Sum.getEvents(events);
  };

  _createClass(Ext_data_summary_Average, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_summary_Sum.observedAttributes;
      Ext_data_summary_Average.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_summary_Average.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_summary_Average(properties, events) {
    return _Ext_data_summary_Sum.call(this, properties.concat(Ext_data_summary_Average.PROPERTIES()), events.concat(Ext_data_summary_Average.EVENTS())) || this;
  }

  var _proto = Ext_data_summary_Average.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_summary_Sum.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_summary_Sum.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_summary_Average;
}(Ext_data_summary_Sum);

export { Ext_data_summary_Average as default };