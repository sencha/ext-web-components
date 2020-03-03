import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_summary_Base from '../../../Ext/data/summary/Base.js';

var Ext_data_summary_Max = /*#__PURE__*/function (_Ext_data_summary_Bas) {
  _inheritsLoose(Ext_data_summary_Max, _Ext_data_summary_Bas);

  Ext_data_summary_Max.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_summary_Max.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_summary_Max.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_summary_Max.PROPERTIES());
    return Ext_data_summary_Base.getProperties(properties);
  };

  Ext_data_summary_Max.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_summary_Max.EVENTS());
    return Ext_data_summary_Base.getEvents(events);
  };

  _createClass(Ext_data_summary_Max, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_summary_Bas.observedAttributes;
      Ext_data_summary_Max.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_summary_Max.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_summary_Max(properties, events) {
    return _Ext_data_summary_Bas.call(this, properties.concat(Ext_data_summary_Max.PROPERTIES()), events.concat(Ext_data_summary_Max.EVENTS())) || this;
  }

  var _proto = Ext_data_summary_Max.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_summary_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_summary_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_summary_Max;
}(Ext_data_summary_Base);

export { Ext_data_summary_Max as default };