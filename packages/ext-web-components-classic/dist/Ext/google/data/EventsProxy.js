import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_google_data_AbstractProxy from '../../../Ext/google/data/AbstractProxy.js';

var Ext_google_data_EventsProxy = /*#__PURE__*/function (_Ext_google_data_Abst) {
  _inheritsLoose(Ext_google_data_EventsProxy, _Ext_google_data_Abst);

  Ext_google_data_EventsProxy.PROPERTIES = function PROPERTIES() {
    return ['api', 'batchActions', 'batchOrder', 'cacheString', 'directionParam', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'pageParam', 'reader', 'requiredScripts', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'writer'];
  };

  Ext_google_data_EventsProxy.EVENTS = function EVENTS() {
    return [{
      name: 'exception',
      parameters: 'sender,response,operation'
    }, {
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

  Ext_google_data_EventsProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_google_data_EventsProxy.PROPERTIES());
    return Ext_google_data_AbstractProxy.getProperties(properties);
  };

  Ext_google_data_EventsProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_google_data_EventsProxy.EVENTS());
    return Ext_google_data_AbstractProxy.getEvents(events);
  };

  _createClass(Ext_google_data_EventsProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_google_data_Abst.observedAttributes;
      Ext_google_data_EventsProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_google_data_EventsProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_google_data_EventsProxy(properties, events) {
    return _Ext_google_data_Abst.call(this, properties.concat(Ext_google_data_EventsProxy.PROPERTIES()), events.concat(Ext_google_data_EventsProxy.EVENTS())) || this;
  }

  var _proto = Ext_google_data_EventsProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_google_data_Abst.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_google_data_Abst.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_google_data_EventsProxy;
}(Ext_google_data_AbstractProxy);

export { Ext_google_data_EventsProxy as default };