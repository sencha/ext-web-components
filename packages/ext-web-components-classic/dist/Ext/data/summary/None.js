import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_summary_Base from '../../../Ext/data/summary/Base.js';

var Ext_data_summary_None = /*#__PURE__*/function (_Ext_data_summary_Bas) {
  _inheritsLoose(Ext_data_summary_None, _Ext_data_summary_Bas);

  Ext_data_summary_None.PROPERTIES = function PROPERTIES() {
    return ['value'];
  };

  Ext_data_summary_None.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_summary_None.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_summary_None.PROPERTIES());
    return Ext_data_summary_Base.getProperties(properties);
  };

  Ext_data_summary_None.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_summary_None.EVENTS());
    return Ext_data_summary_Base.getEvents(events);
  };

  _createClass(Ext_data_summary_None, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_summary_Bas.observedAttributes;
      Ext_data_summary_None.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_summary_None.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_summary_None(properties, events) {
    return _Ext_data_summary_Bas.call(this, properties.concat(Ext_data_summary_None.PROPERTIES()), events.concat(Ext_data_summary_None.EVENTS())) || this;
  }

  var _proto = Ext_data_summary_None.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_summary_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_summary_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_summary_None;
}(Ext_data_summary_Base);

export { Ext_data_summary_None as default };