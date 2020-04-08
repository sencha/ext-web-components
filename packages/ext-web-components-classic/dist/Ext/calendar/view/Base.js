import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from '../../../Ext/Gadget.js';

var Ext_calendar_view_Base = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(Ext_calendar_view_Base, _Ext_Gadget);

  Ext_calendar_view_Base.PROPERTIES = function PROPERTIES() {
    return ['addForm', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'compact', 'compactOptions', 'controller', 'controlStoreRange', 'defaultListenerScope', 'disabled', 'editForm', 'eventDefaults', 'focusCls', 'gestureNavigation', 'header', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'store', 'style', 'timezoneOffset', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width'];
  };

  Ext_calendar_view_Base.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeeventadd',
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

  Ext_calendar_view_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Base.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  };

  Ext_calendar_view_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_view_Base.EVENTS());
    return Ext_Gadget.getEvents(events);
  };

  _createClass(Ext_calendar_view_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget.observedAttributes;
      Ext_calendar_view_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_view_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Base(properties, events) {
    return _Ext_Gadget.call(this, properties.concat(Ext_calendar_view_Base.PROPERTIES()), events.concat(Ext_calendar_view_Base.EVENTS())) || this;
  }

  var _proto = Ext_calendar_view_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Base;
}(Ext_Gadget);

export { Ext_calendar_view_Base as default };