import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_WebStorage from '../../../Ext/data/proxy/WebStorage.js';

var Ext_data_proxy_LocalStorage = /*#__PURE__*/function (_Ext_data_proxy_WebSt) {
  _inheritsLoose(Ext_data_proxy_LocalStorage, _Ext_data_proxy_WebSt);

  Ext_data_proxy_LocalStorage.PROPERTIES = function PROPERTIES() {
    return ['batchActions', 'batchOrder', 'id', 'listeners', 'model', 'reader', 'writer'];
  };

  Ext_data_proxy_LocalStorage.EVENTS = function EVENTS() {
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

  Ext_data_proxy_LocalStorage.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_proxy_LocalStorage.PROPERTIES());
    return Ext_data_proxy_WebStorage.getProperties(properties);
  };

  Ext_data_proxy_LocalStorage.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_proxy_LocalStorage.EVENTS());
    return Ext_data_proxy_WebStorage.getEvents(events);
  };

  _createClass(Ext_data_proxy_LocalStorage, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_WebSt.observedAttributes;
      Ext_data_proxy_LocalStorage.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_proxy_LocalStorage.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_proxy_LocalStorage(properties, events) {
    return _Ext_data_proxy_WebSt.call(this, properties.concat(Ext_data_proxy_LocalStorage.PROPERTIES()), events.concat(Ext_data_proxy_LocalStorage.EVENTS())) || this;
  }

  var _proto = Ext_data_proxy_LocalStorage.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_WebSt.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_WebSt.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_proxy_LocalStorage;
}(Ext_data_proxy_WebStorage);

export { Ext_data_proxy_LocalStorage as default };