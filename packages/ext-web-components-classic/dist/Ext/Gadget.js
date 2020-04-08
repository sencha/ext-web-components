import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Evented from '../Ext/Evented.js';

var Ext_Gadget = /*#__PURE__*/function (_Ext_Evented) {
  _inheritsLoose(Ext_Gadget, _Ext_Evented);

  Ext_Gadget.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_Gadget.EVENTS = function EVENTS() {
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

  Ext_Gadget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Gadget.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  };

  Ext_Gadget.getEvents = function getEvents(events) {
    events = events.concat(Ext_Gadget.EVENTS());
    return Ext_Evented.getEvents(events);
  };

  _createClass(Ext_Gadget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Evented.observedAttributes;
      Ext_Gadget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Gadget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Gadget(properties, events) {
    return _Ext_Evented.call(this, properties.concat(Ext_Gadget.PROPERTIES()), events.concat(Ext_Gadget.EVENTS())) || this;
  }

  var _proto = Ext_Gadget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Evented.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Evented.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Gadget;
}(Ext_Evented);

export { Ext_Gadget as default };