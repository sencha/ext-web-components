import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from '../Ext/Gadget.js';

var Ext_Progress = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(Ext_Progress, _Ext_Gadget);

  Ext_Progress.PROPERTIES = function PROPERTIES() {
    return ['animate', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'text', 'textTpl', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width'];
  };

  Ext_Progress.EVENTS = function EVENTS() {
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

  Ext_Progress.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Progress.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  };

  Ext_Progress.getEvents = function getEvents(events) {
    events = events.concat(Ext_Progress.EVENTS());
    return Ext_Gadget.getEvents(events);
  };

  _createClass(Ext_Progress, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget.observedAttributes;
      Ext_Progress.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Progress.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Progress(properties, events) {
    return _Ext_Gadget.call(this, properties.concat(Ext_Progress.PROPERTIES()), events.concat(Ext_Progress.EVENTS())) || this;
  }

  var _proto = Ext_Progress.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Progress;
}(Ext_Gadget);

export { Ext_Progress as default };