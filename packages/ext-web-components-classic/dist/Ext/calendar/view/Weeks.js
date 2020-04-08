import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Base from '../../../Ext/calendar/view/Base.js';

var Ext_calendar_view_Weeks = /*#__PURE__*/function (_Ext_calendar_view_Ba) {
  _inheritsLoose(Ext_calendar_view_Weeks, _Ext_calendar_view_Ba);

  Ext_calendar_view_Weeks.PROPERTIES = function PROPERTIES() {
    return ['addForm', 'addOnSelect', 'allowSelection', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'compact', 'compactOptions', 'controller', 'controlStoreRange', 'dayFormat', 'defaultListenerScope', 'disabled', 'draggable', 'droppable', 'editForm', 'eventDefaults', 'firstDayOfWeek', 'focusCls', 'gestureNavigation', 'header', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'overflowText', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'showOverflow', 'store', 'style', 'timezoneOffset', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'visibleDays', 'visibleWeeks', 'weekendDays', 'width'];
  };

  Ext_calendar_view_Weeks.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeeventadd',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventdragstart',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'sender,context'
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
      name: 'eventadd',
      parameters: 'sender,context'
    }, {
      name: 'eventdrop',
      parameters: 'sender,context'
    }, {
      name: 'eventedit',
      parameters: 'sender,context'
    }, {
      name: 'eventtap',
      parameters: 'sender,context'
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
      name: 'select',
      parameters: 'sender,context'
    }, {
      name: 'selectrange',
      parameters: 'sender,context'
    }, {
      name: 'validateeventadd',
      parameters: 'sender,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'sender,context'
    }, {
      name: 'validateeventedit',
      parameters: 'sender,context'
    }, {
      name: 'valuechange',
      parameters: 'sender,context'
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

  Ext_calendar_view_Weeks.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Weeks.PROPERTIES());
    return Ext_calendar_view_Base.getProperties(properties);
  };

  Ext_calendar_view_Weeks.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_view_Weeks.EVENTS());
    return Ext_calendar_view_Base.getEvents(events);
  };

  _createClass(Ext_calendar_view_Weeks, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_view_Ba.observedAttributes;
      Ext_calendar_view_Weeks.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_view_Weeks.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Weeks(properties, events) {
    return _Ext_calendar_view_Ba.call(this, properties.concat(Ext_calendar_view_Weeks.PROPERTIES()), events.concat(Ext_calendar_view_Weeks.EVENTS())) || this;
  }

  var _proto = Ext_calendar_view_Weeks.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_view_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_view_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Weeks;
}(Ext_calendar_view_Base);

export { Ext_calendar_view_Weeks as default };