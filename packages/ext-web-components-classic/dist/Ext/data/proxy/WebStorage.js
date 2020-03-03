import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Client from '../../../Ext/data/proxy/Client.js';

var Ext_data_proxy_WebStorage = /*#__PURE__*/function (_Ext_data_proxy_Clien) {
  _inheritsLoose(Ext_data_proxy_WebStorage, _Ext_data_proxy_Clien);

  Ext_data_proxy_WebStorage.PROPERTIES = function PROPERTIES() {
    return ['batchActions', 'batchOrder', 'id', 'listeners', 'model', 'reader', 'writer'];
  };

  Ext_data_proxy_WebStorage.EVENTS = function EVENTS() {
    return [{
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_proxy_WebStorage.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_proxy_WebStorage.PROPERTIES());
    return Ext_data_proxy_Client.getProperties(properties);
  };

  Ext_data_proxy_WebStorage.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_proxy_WebStorage.EVENTS());
    return Ext_data_proxy_Client.getEvents(events);
  };

  _createClass(Ext_data_proxy_WebStorage, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Clien.observedAttributes;
      Ext_data_proxy_WebStorage.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_proxy_WebStorage.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_proxy_WebStorage(properties, events) {
    return _Ext_data_proxy_Clien.call(this, properties.concat(Ext_data_proxy_WebStorage.PROPERTIES()), events.concat(Ext_data_proxy_WebStorage.EVENTS())) || this;
  }

  var _proto = Ext_data_proxy_WebStorage.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Clien.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Clien.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_proxy_WebStorage;
}(Ext_data_proxy_Client);

export { Ext_data_proxy_WebStorage as default };