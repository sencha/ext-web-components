import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget from '../../Ext/Widget.js';

var Ext_d3_ComponentBase = /*#__PURE__*/function (_Ext_Widget) {
  _inheritsLoose(Ext_d3_ComponentBase, _Ext_Widget);

  Ext_d3_ComponentBase.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_d3_ComponentBase.EVENTS = function EVENTS() {
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

  Ext_d3_ComponentBase.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_ComponentBase.PROPERTIES());
    return Ext_Widget.getProperties(properties);
  };

  Ext_d3_ComponentBase.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_ComponentBase.EVENTS());
    return Ext_Widget.getEvents(events);
  };

  _createClass(Ext_d3_ComponentBase, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget.observedAttributes;
      Ext_d3_ComponentBase.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_ComponentBase.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_ComponentBase(properties, events) {
    return _Ext_Widget.call(this, properties.concat(Ext_d3_ComponentBase.PROPERTIES()), events.concat(Ext_d3_ComponentBase.EVENTS())) || this;
  }

  var _proto = Ext_d3_ComponentBase.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_ComponentBase;
}(Ext_Widget);

export { Ext_d3_ComponentBase as default };