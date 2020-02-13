import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_DataProxy =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_data_DataProxy, _Ext_Base);

  Ext_data_DataProxy.PROPERTIES = function PROPERTIES() {
    return ['batchActions', 'batchOrder', 'listeners', 'model', 'reader', 'writer'];
  };

  Ext_data_DataProxy.EVENTS = function EVENTS() {
    return [{
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_DataProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_DataProxy.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_DataProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_DataProxy.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_DataProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_DataProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_DataProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_DataProxy(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_DataProxy.PROPERTIES()), events.concat(Ext_data_DataProxy.EVENTS())) || this;
  }

  var _proto = Ext_data_DataProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_DataProxy;
}(Ext_Base);

export { Ext_data_DataProxy as default };