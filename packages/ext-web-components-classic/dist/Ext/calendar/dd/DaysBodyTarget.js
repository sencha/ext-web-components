import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_drag_Target from '../../../Ext/drag/Target.js';

var Ext_calendar_dd_DaysBodyTarget = /*#__PURE__*/function (_Ext_drag_Target) {
  _inheritsLoose(Ext_calendar_dd_DaysBodyTarget, _Ext_drag_Target);

  Ext_calendar_dd_DaysBodyTarget.PROPERTIES = function PROPERTIES() {
    return ['accepts', 'autoDestroy', 'component', 'element', 'groups', 'invalidCls', 'listeners', 'validCls'];
  };

  Ext_calendar_dd_DaysBodyTarget.EVENTS = function EVENTS() {
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

  Ext_calendar_dd_DaysBodyTarget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_DaysBodyTarget.PROPERTIES());
    return Ext_drag_Target.getProperties(properties);
  };

  Ext_calendar_dd_DaysBodyTarget.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_dd_DaysBodyTarget.EVENTS());
    return Ext_drag_Target.getEvents(events);
  };

  _createClass(Ext_calendar_dd_DaysBodyTarget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_drag_Target.observedAttributes;
      Ext_calendar_dd_DaysBodyTarget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_dd_DaysBodyTarget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_dd_DaysBodyTarget(properties, events) {
    return _Ext_drag_Target.call(this, properties.concat(Ext_calendar_dd_DaysBodyTarget.PROPERTIES()), events.concat(Ext_calendar_dd_DaysBodyTarget.EVENTS())) || this;
  }

  var _proto = Ext_calendar_dd_DaysBodyTarget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_drag_Target.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_drag_Target.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_dd_DaysBodyTarget;
}(Ext_drag_Target);

export { Ext_calendar_dd_DaysBodyTarget as default };