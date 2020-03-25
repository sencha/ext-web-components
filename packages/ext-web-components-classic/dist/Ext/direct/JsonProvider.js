import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_direct_Provider from '../../Ext/direct/Provider.js';

var Ext_direct_JsonProvider = /*#__PURE__*/function (_Ext_direct_Provider) {
  _inheritsLoose(Ext_direct_JsonProvider, _Ext_direct_Provider);

  var _super = _createSuper(Ext_direct_JsonProvider);

  Ext_direct_JsonProvider.PROPERTIES = function PROPERTIES() {
    return ['headers', 'id', 'listeners', 'relayedEvents'];
  };

  Ext_direct_JsonProvider.EVENTS = function EVENTS() {
    return [{
      name: 'connect',
      parameters: 'provider'
    }, {
      name: 'data',
      parameters: 'provider,e'
    }, {
      name: 'disconnect',
      parameters: 'provider'
    }, {
      name: 'exception',
      parameters: 'provider,e'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_direct_JsonProvider.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_direct_JsonProvider.PROPERTIES());
    return Ext_direct_Provider.getProperties(properties);
  };

  Ext_direct_JsonProvider.getEvents = function getEvents(events) {
    events = events.concat(Ext_direct_JsonProvider.EVENTS());
    return Ext_direct_Provider.getEvents(events);
  };

  _createClass(Ext_direct_JsonProvider, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_direct_Provider.observedAttributes;
      Ext_direct_JsonProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_direct_JsonProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_direct_JsonProvider(properties, events) {
    return _Ext_direct_Provider.call(this, properties.concat(Ext_direct_JsonProvider.PROPERTIES()), events.concat(Ext_direct_JsonProvider.EVENTS())) || this;
  }

  var _proto = Ext_direct_JsonProvider.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_direct_Provider.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_direct_Provider.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_direct_JsonProvider;
}(Ext_direct_Provider);

export { Ext_direct_JsonProvider as default };