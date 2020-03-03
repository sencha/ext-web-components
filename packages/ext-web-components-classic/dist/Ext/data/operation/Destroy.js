import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_operation_Operation from '../../../Ext/data/operation/Operation.js';

var Ext_data_operation_Destroy = /*#__PURE__*/function (_Ext_data_operation_O) {
  _inheritsLoose(Ext_data_operation_Destroy, _Ext_data_operation_O);

  Ext_data_operation_Destroy.PROPERTIES = function PROPERTIES() {
    return ['batch', 'callback', 'id', 'internalCallback', 'internalScope', 'params', 'proxy', 'recordCreator', 'records', 'request', 'response', 'resultSet', 'scope', 'synchronous', 'url'];
  };

  Ext_data_operation_Destroy.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_operation_Destroy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_operation_Destroy.PROPERTIES());
    return Ext_data_operation_Operation.getProperties(properties);
  };

  Ext_data_operation_Destroy.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_operation_Destroy.EVENTS());
    return Ext_data_operation_Operation.getEvents(events);
  };

  _createClass(Ext_data_operation_Destroy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_operation_O.observedAttributes;
      Ext_data_operation_Destroy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_operation_Destroy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_operation_Destroy(properties, events) {
    return _Ext_data_operation_O.call(this, properties.concat(Ext_data_operation_Destroy.PROPERTIES()), events.concat(Ext_data_operation_Destroy.EVENTS())) || this;
  }

  var _proto = Ext_data_operation_Destroy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_operation_O.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_operation_O.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_operation_Destroy;
}(Ext_data_operation_Operation);

export { Ext_data_operation_Destroy as default };