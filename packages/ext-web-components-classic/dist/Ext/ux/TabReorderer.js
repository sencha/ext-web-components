import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_ux_BoxReorderer from '../../Ext/ux/BoxReorderer.js';

var Ext_ux_TabReorderer = /*#__PURE__*/function (_Ext_ux_BoxReorderer) {
  _inheritsLoose(Ext_ux_TabReorderer, _Ext_ux_BoxReorderer);

  var _super = _createSuper(Ext_ux_TabReorderer);

  Ext_ux_TabReorderer.PROPERTIES = function PROPERTIES() {
    return ['animate', 'id', 'itemSelector', 'listeners', 'stateEvents'];
  };

  Ext_ux_TabReorderer.EVENTS = function EVENTS() {
    return [{
      name: 'ChangeIndex',
      parameters: 'sender,container,dragCmp,startIdx,idx'
    }, {
      name: 'Drag',
      parameters: 'sender,container,dragCmp,startIdx,idx'
    }, {
      name: 'Drop',
      parameters: 'sender,container,dragCmp,startIdx,idx'
    }, {
      name: 'StartDrag',
      parameters: 'sender,container,dragCmp,idx'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_ux_TabReorderer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_TabReorderer.PROPERTIES());
    return Ext_ux_BoxReorderer.getProperties(properties);
  };

  Ext_ux_TabReorderer.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_TabReorderer.EVENTS());
    return Ext_ux_BoxReorderer.getEvents(events);
  };

  _createClass(Ext_ux_TabReorderer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_ux_BoxReorderer.observedAttributes;
      Ext_ux_TabReorderer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_TabReorderer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_TabReorderer(properties, events) {
    return _Ext_ux_BoxReorderer.call(this, properties.concat(Ext_ux_TabReorderer.PROPERTIES()), events.concat(Ext_ux_TabReorderer.EVENTS())) || this;
  }

  var _proto = Ext_ux_TabReorderer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_ux_BoxReorderer.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_ux_BoxReorderer.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_TabReorderer;
}(Ext_ux_BoxReorderer);

export { Ext_ux_TabReorderer as default };