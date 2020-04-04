import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Base from '../../Ext/Base.js';

var Ext_route_Router = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_route_Router, _Ext_Base);

  var _super = _createSuper(Ext_route_Router);

  Ext_route_Router.PROPERTIES = function PROPERTIES() {
    return ['hashBang', 'multipleToken', 'queueRoutes'];
  };

  Ext_route_Router.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_route_Router.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_route_Router.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_route_Router.getEvents = function getEvents(events) {
    events = events.concat(Ext_route_Router.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_route_Router, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_route_Router.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_route_Router.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_route_Router(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_route_Router.PROPERTIES()), events.concat(Ext_route_Router.EVENTS())) || this;
  }

  var _proto = Ext_route_Router.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_route_Router;
}(Ext_Base);

export { Ext_route_Router as default };