import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Ajax from '../../../Ext/data/proxy/Ajax.js';

var Ext_data_proxy_Rest = /*#__PURE__*/function (_Ext_data_proxy_Ajax) {
  _inheritsLoose(Ext_data_proxy_Rest, _Ext_data_proxy_Ajax);

  Ext_data_proxy_Rest.PROPERTIES = function PROPERTIES() {
    return ['actionMethods', 'api', 'appendId', 'batchActions', 'batchOrder', 'binary', 'cacheString', 'directionParam', 'extraParams', 'filterParam', 'format', 'groupDirectionParam', 'groupParam', 'headers', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'pageParam', 'paramsAsJson', 'password', 'reader', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'useDefaultXhrHeader', 'username', 'withCredentials', 'writer'];
  };

  Ext_data_proxy_Rest.EVENTS = function EVENTS() {
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

  Ext_data_proxy_Rest.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_proxy_Rest.PROPERTIES());
    return Ext_data_proxy_Ajax.getProperties(properties);
  };

  Ext_data_proxy_Rest.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_proxy_Rest.EVENTS());
    return Ext_data_proxy_Ajax.getEvents(events);
  };

  _createClass(Ext_data_proxy_Rest, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Ajax.observedAttributes;
      Ext_data_proxy_Rest.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_proxy_Rest.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_proxy_Rest(properties, events) {
    return _Ext_data_proxy_Ajax.call(this, properties.concat(Ext_data_proxy_Rest.PROPERTIES()), events.concat(Ext_data_proxy_Rest.EVENTS())) || this;
  }

  var _proto = Ext_data_proxy_Rest.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Ajax.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Ajax.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_proxy_Rest;
}(Ext_data_proxy_Ajax);

export { Ext_data_proxy_Rest as default };