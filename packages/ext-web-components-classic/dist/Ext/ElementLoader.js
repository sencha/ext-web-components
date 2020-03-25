import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_Base from '../Ext/Base.js';

var Ext_ElementLoader = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_ElementLoader, _Ext_Base);

  var _super = _createSuper(Ext_ElementLoader);

  Ext_ElementLoader.PROPERTIES = function PROPERTIES() {
    return ['ajaxOptions', 'autoLoad', 'baseParams', 'callback', 'failure', 'listeners', 'loadMask', 'params', 'renderer', 'rendererScope', 'scope', 'scripts', 'success', 'target', 'url'];
  };

  Ext_ElementLoader.EVENTS = function EVENTS() {
    return [{
      name: 'beforeload',
      parameters: 'sender,options'
    }, {
      name: 'exception',
      parameters: 'sender,response,options'
    }, {
      name: 'load',
      parameters: 'sender,response,options'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ElementLoader.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ElementLoader.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ElementLoader.getEvents = function getEvents(events) {
    events = events.concat(Ext_ElementLoader.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ElementLoader, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ElementLoader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ElementLoader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ElementLoader(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ElementLoader.PROPERTIES()), events.concat(Ext_ElementLoader.EVENTS())) || this;
  }

  var _proto = Ext_ElementLoader.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ElementLoader;
}(Ext_Base);

export { Ext_ElementLoader as default };