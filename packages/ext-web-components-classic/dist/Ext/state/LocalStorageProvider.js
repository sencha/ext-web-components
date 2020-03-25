import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_state_Provider from '../../Ext/state/Provider.js';

var Ext_state_LocalStorageProvider = /*#__PURE__*/function (_Ext_state_Provider) {
  _inheritsLoose(Ext_state_LocalStorageProvider, _Ext_state_Provider);

  var _super = _createSuper(Ext_state_LocalStorageProvider);

  Ext_state_LocalStorageProvider.PROPERTIES = function PROPERTIES() {
    return ['listeners', 'prefix'];
  };

  Ext_state_LocalStorageProvider.EVENTS = function EVENTS() {
    return [{
      name: 'statechange',
      parameters: 'sender,key,value'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_state_LocalStorageProvider.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_state_LocalStorageProvider.PROPERTIES());
    return Ext_state_Provider.getProperties(properties);
  };

  Ext_state_LocalStorageProvider.getEvents = function getEvents(events) {
    events = events.concat(Ext_state_LocalStorageProvider.EVENTS());
    return Ext_state_Provider.getEvents(events);
  };

  _createClass(Ext_state_LocalStorageProvider, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_state_Provider.observedAttributes;
      Ext_state_LocalStorageProvider.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_state_LocalStorageProvider.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_state_LocalStorageProvider(properties, events) {
    return _Ext_state_Provider.call(this, properties.concat(Ext_state_LocalStorageProvider.PROPERTIES()), events.concat(Ext_state_LocalStorageProvider.EVENTS())) || this;
  }

  var _proto = Ext_state_LocalStorageProvider.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_state_Provider.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_state_Provider.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_state_LocalStorageProvider;
}(Ext_state_Provider);

export { Ext_state_LocalStorageProvider as default };