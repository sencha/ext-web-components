import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_drag_Target from '../../../Ext/drag/Target.js';

var Ext_calendar_dd_DaysAllDayTarget = /*#__PURE__*/function (_Ext_drag_Target) {
  _inheritsLoose(Ext_calendar_dd_DaysAllDayTarget, _Ext_drag_Target);

  var _super = _createSuper(Ext_calendar_dd_DaysAllDayTarget);

  Ext_calendar_dd_DaysAllDayTarget.PROPERTIES = function PROPERTIES() {
    return ['accepts', 'autoDestroy', 'component', 'element', 'groups', 'invalidCls', 'listeners', 'validCls'];
  };

  Ext_calendar_dd_DaysAllDayTarget.EVENTS = function EVENTS() {
    return [{
      name: 'beforedrop',
      parameters: 'sender,info'
    }, {
      name: 'dragenter',
      parameters: 'sender,info'
    }, {
      name: 'dragleave',
      parameters: 'sender,info'
    }, {
      name: 'dragmove',
      parameters: 'sender,info'
    }, {
      name: 'drop',
      parameters: 'sender,info'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_dd_DaysAllDayTarget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_DaysAllDayTarget.PROPERTIES());
    return Ext_drag_Target.getProperties(properties);
  };

  Ext_calendar_dd_DaysAllDayTarget.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_dd_DaysAllDayTarget.EVENTS());
    return Ext_drag_Target.getEvents(events);
  };

  _createClass(Ext_calendar_dd_DaysAllDayTarget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_Target.observedAttributes;
      Ext_calendar_dd_DaysAllDayTarget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_dd_DaysAllDayTarget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_dd_DaysAllDayTarget(properties, events) {
    return _Ext_drag_Target.call(this, properties.concat(Ext_calendar_dd_DaysAllDayTarget.PROPERTIES()), events.concat(Ext_calendar_dd_DaysAllDayTarget.EVENTS())) || this;
  }

  var _proto = Ext_calendar_dd_DaysAllDayTarget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_Target.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_Target.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_dd_DaysAllDayTarget;
}(Ext_drag_Target);

export { Ext_calendar_dd_DaysAllDayTarget as default };