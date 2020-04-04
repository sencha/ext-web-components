import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_google_data_AbstractProxy from '../../../Ext/google/data/AbstractProxy.js';

var Ext_google_data_CalendarsProxy = /*#__PURE__*/function (_Ext_google_data_Abst) {
  _inheritsLoose(Ext_google_data_CalendarsProxy, _Ext_google_data_Abst);

  var _super = _createSuper(Ext_google_data_CalendarsProxy);

  Ext_google_data_CalendarsProxy.PROPERTIES = function PROPERTIES() {
    return ['api', 'batchActions', 'batchOrder', 'cacheString', 'directionParam', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'pageParam', 'reader', 'requiredScripts', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'writer'];
  };

  Ext_google_data_CalendarsProxy.EVENTS = function EVENTS() {
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

  Ext_google_data_CalendarsProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_google_data_CalendarsProxy.PROPERTIES());
    return Ext_google_data_AbstractProxy.getProperties(properties);
  };

  Ext_google_data_CalendarsProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_google_data_CalendarsProxy.EVENTS());
    return Ext_google_data_AbstractProxy.getEvents(events);
  };

  _createClass(Ext_google_data_CalendarsProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_google_data_Abst.observedAttributes;
      Ext_google_data_CalendarsProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_google_data_CalendarsProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_google_data_CalendarsProxy(properties, events) {
    return _Ext_google_data_Abst.call(this, properties.concat(Ext_google_data_CalendarsProxy.PROPERTIES()), events.concat(Ext_google_data_CalendarsProxy.EVENTS())) || this;
  }

  var _proto = Ext_google_data_CalendarsProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_google_data_Abst.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_google_data_Abst.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_google_data_CalendarsProxy;
}(Ext_google_data_AbstractProxy);

export { Ext_google_data_CalendarsProxy as default };