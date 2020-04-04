import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_app_bind_AbstractStub from '../../../Ext/app/bind/AbstractStub.js';

var Ext_app_bind_RootStub = /*#__PURE__*/function (_Ext_app_bind_Abstrac) {
  _inheritsLoose(Ext_app_bind_RootStub, _Ext_app_bind_Abstrac);

  var _super = _createSuper(Ext_app_bind_RootStub);

  Ext_app_bind_RootStub.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_app_bind_RootStub.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_RootStub.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_RootStub.PROPERTIES());
    return Ext_app_bind_AbstractStub.getProperties(properties);
  };

  Ext_app_bind_RootStub.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_RootStub.EVENTS());
    return Ext_app_bind_AbstractStub.getEvents(events);
  };

  _createClass(Ext_app_bind_RootStub, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_bind_Abstrac.observedAttributes;
      Ext_app_bind_RootStub.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_RootStub.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_RootStub(properties, events) {
    return _Ext_app_bind_Abstrac.call(this, properties.concat(Ext_app_bind_RootStub.PROPERTIES()), events.concat(Ext_app_bind_RootStub.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_RootStub.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_bind_Abstrac.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_bind_Abstrac.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_RootStub;
}(Ext_app_bind_AbstractStub);

export { Ext_app_bind_RootStub as default };