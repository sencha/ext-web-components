import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_ComponentBase from '../../Ext/d3/ComponentBase.js';

var Ext_d3_Component = /*#__PURE__*/function (_Ext_d3_ComponentBase) {
  _inheritsLoose(Ext_d3_Component, _Ext_d3_ComponentBase);

  Ext_d3_Component.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'store', 'style', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_d3_Component.EVENTS = function EVENTS() {
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

  Ext_d3_Component.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_Component.PROPERTIES());
    return Ext_d3_ComponentBase.getProperties(properties);
  };

  Ext_d3_Component.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_Component.EVENTS());
    return Ext_d3_ComponentBase.getEvents(events);
  };

  _createClass(Ext_d3_Component, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_ComponentBase.observedAttributes;
      Ext_d3_Component.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_Component.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_Component(properties, events) {
    return _Ext_d3_ComponentBase.call(this, properties.concat(Ext_d3_Component.PROPERTIES()), events.concat(Ext_d3_Component.EVENTS())) || this;
  }

  var _proto = Ext_d3_Component.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_ComponentBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_ComponentBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_Component;
}(Ext_d3_ComponentBase);

export { Ext_d3_Component as default };