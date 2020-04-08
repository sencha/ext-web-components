import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_LruCache from '../../Ext/util/LruCache.js';

var Ext_data_PageMap = /*#__PURE__*/function (_Ext_util_LruCache) {
  _inheritsLoose(Ext_data_PageMap, _Ext_util_LruCache);

  Ext_data_PageMap.PROPERTIES = function PROPERTIES() {
    return ['keyFn', 'listeners', 'maxSize', 'pageSize', 'rootProperty'];
  };

  Ext_data_PageMap.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'sender,key,value'
    }, {
      name: 'clear',
      parameters: 'sender'
    }, {
      name: 'remove',
      parameters: 'sender,key,value'
    }, {
      name: 'replace',
      parameters: 'sender,key,value,old'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_PageMap.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_PageMap.PROPERTIES());
    return Ext_util_LruCache.getProperties(properties);
  };

  Ext_data_PageMap.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_PageMap.EVENTS());
    return Ext_util_LruCache.getEvents(events);
  };

  _createClass(Ext_data_PageMap, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_LruCache.observedAttributes;
      Ext_data_PageMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_PageMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_PageMap(properties, events) {
    return _Ext_util_LruCache.call(this, properties.concat(Ext_data_PageMap.PROPERTIES()), events.concat(Ext_data_PageMap.EVENTS())) || this;
  }

  var _proto = Ext_data_PageMap.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_LruCache.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_LruCache.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_PageMap;
}(Ext_util_LruCache);

export { Ext_data_PageMap as default };