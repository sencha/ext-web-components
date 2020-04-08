import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

var Ext_sparkline_Bullet = /*#__PURE__*/function (_Ext_sparkline_Base) {
  _inheritsLoose(Ext_sparkline_Bullet, _Ext_sparkline_Base);

  Ext_sparkline_Bullet.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'base', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'listeners', 'margin', 'name', 'nameable', 'performanceColor', 'plugins', 'publishes', 'rangeColors', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'targetColor', 'targetWidth', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'viewModel', 'width'];
  };

  Ext_sparkline_Bullet.EVENTS = function EVENTS() {
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

  Ext_sparkline_Bullet.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_Bullet.PROPERTIES());
    return Ext_sparkline_Base.getProperties(properties);
  };

  Ext_sparkline_Bullet.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_Bullet.EVENTS());
    return Ext_sparkline_Base.getEvents(events);
  };

  _createClass(Ext_sparkline_Bullet, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Base.observedAttributes;
      Ext_sparkline_Bullet.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_Bullet.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Bullet(properties, events) {
    return _Ext_sparkline_Base.call(this, properties.concat(Ext_sparkline_Bullet.PROPERTIES()), events.concat(Ext_sparkline_Bullet.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_Bullet.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Bullet;
}(Ext_sparkline_Base);

export { Ext_sparkline_Bullet as default };