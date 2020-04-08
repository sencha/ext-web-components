import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_BarBase from '../../Ext/sparkline/BarBase.js';

var Ext_sparkline_Bar = /*#__PURE__*/function (_Ext_sparkline_BarBas) {
  _inheritsLoose(Ext_sparkline_Bar, _Ext_sparkline_BarBas);

  Ext_sparkline_Bar.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'barColor', 'barSpacing', 'barWidth', 'bind', 'border', 'chartRangeClip', 'chartRangeMax', 'chartRangeMin', 'cls', 'colorMap', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'listeners', 'margin', 'name', 'nameable', 'negBarColor', 'nullColor', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'stackedBarColor', 'style', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'viewModel', 'width', 'zeroAxis', 'zeroColor'];
  };

  Ext_sparkline_Bar.EVENTS = function EVENTS() {
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

  Ext_sparkline_Bar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_Bar.PROPERTIES());
    return Ext_sparkline_BarBase.getProperties(properties);
  };

  Ext_sparkline_Bar.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_Bar.EVENTS());
    return Ext_sparkline_BarBase.getEvents(events);
  };

  _createClass(Ext_sparkline_Bar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_BarBas.observedAttributes;
      Ext_sparkline_Bar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_Bar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Bar(properties, events) {
    return _Ext_sparkline_BarBas.call(this, properties.concat(Ext_sparkline_Bar.PROPERTIES()), events.concat(Ext_sparkline_Bar.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_Bar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_BarBas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_BarBas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Bar;
}(Ext_sparkline_BarBase);

export { Ext_sparkline_Bar as default };