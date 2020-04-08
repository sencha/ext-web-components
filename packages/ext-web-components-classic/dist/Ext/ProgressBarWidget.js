import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from '../Ext/Gadget.js';

var Ext_ProgressBarWidget = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(Ext_ProgressBarWidget, _Ext_Gadget);

  Ext_ProgressBarWidget.PROPERTIES = function PROPERTIES() {
    return ['animate', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'text', 'textTpl', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width'];
  };

  Ext_ProgressBarWidget.EVENTS = function EVENTS() {
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

  Ext_ProgressBarWidget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ProgressBarWidget.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  };

  Ext_ProgressBarWidget.getEvents = function getEvents(events) {
    events = events.concat(Ext_ProgressBarWidget.EVENTS());
    return Ext_Gadget.getEvents(events);
  };

  _createClass(Ext_ProgressBarWidget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget.observedAttributes;
      Ext_ProgressBarWidget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ProgressBarWidget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ProgressBarWidget(properties, events) {
    return _Ext_Gadget.call(this, properties.concat(Ext_ProgressBarWidget.PROPERTIES()), events.concat(Ext_ProgressBarWidget.EVENTS())) || this;
  }

  var _proto = Ext_ProgressBarWidget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ProgressBarWidget;
}(Ext_Gadget);

export { Ext_ProgressBarWidget as default };