import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from '../../Ext/Gadget.js';

var Ext_sparkline_Base = /*#__PURE__*/function (_Ext_Gadget) {
  _inheritsLoose(Ext_sparkline_Base, _Ext_Gadget);

  Ext_sparkline_Base.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'viewModel', 'width'];
  };

  Ext_sparkline_Base.EVENTS = function EVENTS() {
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

  Ext_sparkline_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_Base.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  };

  Ext_sparkline_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_Base.EVENTS());
    return Ext_Gadget.getEvents(events);
  };

  _createClass(Ext_sparkline_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Gadget.observedAttributes;
      Ext_sparkline_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Base(properties, events) {
    return _Ext_Gadget.call(this, properties.concat(Ext_sparkline_Base.PROPERTIES()), events.concat(Ext_sparkline_Base.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Gadget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Gadget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Base;
}(Ext_Gadget);

export { Ext_sparkline_Base as default };