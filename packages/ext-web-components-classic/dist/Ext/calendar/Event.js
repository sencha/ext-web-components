import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_EventBase from '../../Ext/calendar/EventBase.js';

var Ext_calendar_Event = /*#__PURE__*/function (_Ext_calendar_EventBa) {
  _inheritsLoose(Ext_calendar_Event, _Ext_calendar_EventBa);

  Ext_calendar_Event.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'defaultTitle', 'disabled', 'endDate', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'mode', 'model', 'name', 'nameable', 'palette', 'plugins', 'publishes', 'reference', 'renderTo', 'resize', 'ripple', 'session', 'shareableName', 'startDate', 'style', 'timeFormat', 'title', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'view', 'viewModel', 'width'];
  };

  Ext_calendar_Event.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_calendar_Event.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_Event.PROPERTIES());
    return Ext_calendar_EventBase.getProperties(properties);
  };

  Ext_calendar_Event.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_Event.EVENTS());
    return Ext_calendar_EventBase.getEvents(events);
  };

  _createClass(Ext_calendar_Event, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_EventBa.observedAttributes;
      Ext_calendar_Event.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_Event.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_Event(properties, events) {
    return _Ext_calendar_EventBa.call(this, properties.concat(Ext_calendar_Event.PROPERTIES()), events.concat(Ext_calendar_Event.EVENTS())) || this;
  }

  var _proto = Ext_calendar_Event.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_EventBa.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_EventBa.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_Event;
}(Ext_calendar_EventBase);

export { Ext_calendar_Event as default };