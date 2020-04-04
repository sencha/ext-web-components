import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_event_publisher_Dom from '../../../Ext/event/publisher/Dom.js';

var Ext_event_publisher_Focus = /*#__PURE__*/function (_Ext_event_publisher_) {
  _inheritsLoose(Ext_event_publisher_Focus, _Ext_event_publisher_);

  var _super = _createSuper(Ext_event_publisher_Focus);

  Ext_event_publisher_Focus.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_event_publisher_Focus.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_event_publisher_Focus.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_event_publisher_Focus.PROPERTIES());
    return Ext_event_publisher_Dom.getProperties(properties);
  };

  Ext_event_publisher_Focus.getEvents = function getEvents(events) {
    events = events.concat(Ext_event_publisher_Focus.EVENTS());
    return Ext_event_publisher_Dom.getEvents(events);
  };

  _createClass(Ext_event_publisher_Focus, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_event_publisher_.observedAttributes;
      Ext_event_publisher_Focus.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_event_publisher_Focus.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_event_publisher_Focus(properties, events) {
    return _Ext_event_publisher_.call(this, properties.concat(Ext_event_publisher_Focus.PROPERTIES()), events.concat(Ext_event_publisher_Focus.EVENTS())) || this;
  }

  var _proto = Ext_event_publisher_Focus.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_event_publisher_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_event_publisher_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_event_publisher_Focus;
}(Ext_event_publisher_Dom);

export { Ext_event_publisher_Focus as default };