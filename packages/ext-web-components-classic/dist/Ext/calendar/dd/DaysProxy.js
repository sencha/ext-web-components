import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_drag_proxy_Placeholder from '../../../Ext/drag/proxy/Placeholder.js';

var Ext_calendar_dd_DaysProxy = /*#__PURE__*/function (_Ext_drag_proxy_Place) {
  _inheritsLoose(Ext_calendar_dd_DaysProxy, _Ext_drag_proxy_Place);

  var _super = _createSuper(Ext_calendar_dd_DaysProxy);

  Ext_calendar_dd_DaysProxy.PROPERTIES = function PROPERTIES() {
    return ['cls', 'cursorOffset', 'html', 'invalidCls', 'validCls'];
  };

  Ext_calendar_dd_DaysProxy.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_dd_DaysProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_DaysProxy.PROPERTIES());
    return Ext_drag_proxy_Placeholder.getProperties(properties);
  };

  Ext_calendar_dd_DaysProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_dd_DaysProxy.EVENTS());
    return Ext_drag_proxy_Placeholder.getEvents(events);
  };

  _createClass(Ext_calendar_dd_DaysProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_proxy_Place.observedAttributes;
      Ext_calendar_dd_DaysProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_dd_DaysProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_dd_DaysProxy(properties, events) {
    return _Ext_drag_proxy_Place.call(this, properties.concat(Ext_calendar_dd_DaysProxy.PROPERTIES()), events.concat(Ext_calendar_dd_DaysProxy.EVENTS())) || this;
  }

  var _proto = Ext_calendar_dd_DaysProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_proxy_Place.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_proxy_Place.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_dd_DaysProxy;
}(Ext_drag_proxy_Placeholder);

export { Ext_calendar_dd_DaysProxy as default };