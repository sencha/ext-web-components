import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_layout_container_Anchor from '../../../Ext/layout/container/Anchor.js';

var Ext_layout_container_Absolute = /*#__PURE__*/function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_container_Absolute, _Ext_layout_container);

  var _super = _createSuper(Ext_layout_container_Absolute);

  Ext_layout_container_Absolute.PROPERTIES = function PROPERTIES() {
    return ['anchor', 'animatePolicy', 'childEls', 'defaultAnchor', 'itemCls', 'reserveScrollbar'];
  };

  Ext_layout_container_Absolute.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_layout_container_Absolute.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Absolute.PROPERTIES());
    return Ext_layout_container_Anchor.getProperties(properties);
  };

  Ext_layout_container_Absolute.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_Absolute.EVENTS());
    return Ext_layout_container_Anchor.getEvents(events);
  };

  _createClass(Ext_layout_container_Absolute, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_container_Absolute.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_Absolute.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_Absolute(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_container_Absolute.PROPERTIES()), events.concat(Ext_layout_container_Absolute.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_Absolute.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_Absolute;
}(Ext_layout_container_Anchor);

export { Ext_layout_container_Absolute as default };