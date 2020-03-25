import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_util_HashMap from '../../Ext/util/HashMap.js';

var Ext_util_LruCache = /*#__PURE__*/function (_Ext_util_HashMap) {
  _inheritsLoose(Ext_util_LruCache, _Ext_util_HashMap);

  var _super = _createSuper(Ext_util_LruCache);

  Ext_util_LruCache.PROPERTIES = function PROPERTIES() {
    return ['keyFn', 'listeners', 'maxSize'];
  };

  Ext_util_LruCache.EVENTS = function EVENTS() {
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

  Ext_util_LruCache.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_LruCache.PROPERTIES());
    return Ext_util_HashMap.getProperties(properties);
  };

  Ext_util_LruCache.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_LruCache.EVENTS());
    return Ext_util_HashMap.getEvents(events);
  };

  _createClass(Ext_util_LruCache, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_HashMap.observedAttributes;
      Ext_util_LruCache.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_LruCache.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_LruCache(properties, events) {
    return _Ext_util_HashMap.call(this, properties.concat(Ext_util_LruCache.PROPERTIES()), events.concat(Ext_util_LruCache.EVENTS())) || this;
  }

  var _proto = Ext_util_LruCache.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_HashMap.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_HashMap.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_LruCache;
}(Ext_util_HashMap);

export { Ext_util_LruCache as default };