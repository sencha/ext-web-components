import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from '../../Ext/Gadget.js';

var Ext_calendar_EventBase = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(Ext_calendar_EventBase, _Ext_Gadget);

  Ext_calendar_EventBase.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'defaultTitle', 'disabled', 'endDate', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'mode', 'model', 'name', 'nameable', 'palette', 'plugins', 'publishes', 'reference', 'renderTo', 'resize', 'ripple', 'session', 'shareableName', 'startDate', 'style', 'title', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'view', 'viewModel', 'width'];
  };

  Ext_calendar_EventBase.EVENTS = function EVENTS() {
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

  Ext_calendar_EventBase.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_EventBase.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  };

  Ext_calendar_EventBase.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_EventBase.EVENTS());
    return Ext_Gadget.getEvents(events);
  };

  _createClass(Ext_calendar_EventBase, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget.observedAttributes;
      Ext_calendar_EventBase.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_EventBase.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_EventBase(properties, events) {
    return _Ext_Gadget.call(this, properties.concat(Ext_calendar_EventBase.PROPERTIES()), events.concat(Ext_calendar_EventBase.EVENTS())) || this;
  }

  var _proto = Ext_calendar_EventBase.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_EventBase;
}(Ext_Gadget);

export { Ext_calendar_EventBase as default };