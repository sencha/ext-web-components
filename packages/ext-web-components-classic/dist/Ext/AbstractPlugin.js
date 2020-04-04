import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Base from '../Ext/Base.js';

var Ext_AbstractPlugin = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_AbstractPlugin, _Ext_Base);

  var _super = _createSuper(Ext_AbstractPlugin);

  Ext_AbstractPlugin.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_AbstractPlugin.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_AbstractPlugin.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_AbstractPlugin.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_AbstractPlugin.getEvents = function getEvents(events) {
    events = events.concat(Ext_AbstractPlugin.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_AbstractPlugin, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_AbstractPlugin.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_AbstractPlugin.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_AbstractPlugin(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_AbstractPlugin.PROPERTIES()), events.concat(Ext_AbstractPlugin.EVENTS())) || this;
  }

  var _proto = Ext_AbstractPlugin.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_AbstractPlugin;
}(Ext_Base);

export { Ext_AbstractPlugin as default };