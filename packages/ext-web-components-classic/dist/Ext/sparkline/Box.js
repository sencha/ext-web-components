import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

var Ext_sparkline_Box = /*#__PURE__*/function (_Ext_sparkline_Base) {
  _inheritsLoose(Ext_sparkline_Box, _Ext_sparkline_Base);

  Ext_sparkline_Box.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'boxFillColor', 'boxLineColor', 'chartRangeMax', 'chartRangeMin', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'listeners', 'margin', 'medianColor', 'name', 'nameable', 'outlierFillColor', 'outlierIQR', 'outlierLineColor', 'plugins', 'publishes', 'raw', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'showOutliers', 'spotRadius', 'style', 'target', 'targetColor', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'viewModel', 'whiskerColor', 'width'];
  };

  Ext_sparkline_Box.EVENTS = function EVENTS() {
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

  Ext_sparkline_Box.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_Box.PROPERTIES());
    return Ext_sparkline_Base.getProperties(properties);
  };

  Ext_sparkline_Box.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_Box.EVENTS());
    return Ext_sparkline_Base.getEvents(events);
  };

  _createClass(Ext_sparkline_Box, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Base.observedAttributes;
      Ext_sparkline_Box.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_Box.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Box(properties, events) {
    return _Ext_sparkline_Base.call(this, properties.concat(Ext_sparkline_Box.PROPERTIES()), events.concat(Ext_sparkline_Box.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_Box.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Box;
}(Ext_sparkline_Base);

export { Ext_sparkline_Box as default };