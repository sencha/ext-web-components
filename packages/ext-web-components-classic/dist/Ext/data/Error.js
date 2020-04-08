import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_Error = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_data_Error, _Ext_Base);

  Ext_data_Error.PROPERTIES = function PROPERTIES() {
    return ['field', 'message'];
  };

  Ext_data_Error.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_Error.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Error.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_Error.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Error.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_Error, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_Error.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Error.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Error(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_Error.PROPERTIES()), events.concat(Ext_data_Error.EVENTS())) || this;
  }

  var _proto = Ext_data_Error.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Error;
}(Ext_Base);

export { Ext_data_Error as default };