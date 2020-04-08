import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_sparkline_Base from '../../Ext/sparkline/Base.js';

var Ext_sparkline_Line = /*#__PURE__*/function (_Ext_sparkline_Base) {
  _inheritsLoose(Ext_sparkline_Line, _Ext_sparkline_Base);

  Ext_sparkline_Line.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'chartRangeMax', 'chartRangeMaxX', 'chartRangeMin', 'chartRangeMinX', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'drawNormalOnTop', 'fillColor', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'highlightLineColor', 'highlightSpotColor', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'lineWidth', 'listeners', 'margin', 'maxSpotColor', 'minSpotColor', 'name', 'nameable', 'normalRangeColor', 'normalRangeMax', 'normalRangeMin', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'spotColor', 'spotRadius', 'style', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'valueSpots', 'viewModel', 'width'];
  };

  Ext_sparkline_Line.EVENTS = function EVENTS() {
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

  Ext_sparkline_Line.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_sparkline_Line.PROPERTIES());
    return Ext_sparkline_Base.getProperties(properties);
  };

  Ext_sparkline_Line.getEvents = function getEvents(events) {
    events = events.concat(Ext_sparkline_Line.EVENTS());
    return Ext_sparkline_Base.getEvents(events);
  };

  _createClass(Ext_sparkline_Line, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_sparkline_Base.observedAttributes;
      Ext_sparkline_Line.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_sparkline_Line.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_sparkline_Line(properties, events) {
    return _Ext_sparkline_Base.call(this, properties.concat(Ext_sparkline_Line.PROPERTIES()), events.concat(Ext_sparkline_Line.EVENTS())) || this;
  }

  var _proto = Ext_sparkline_Line.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_sparkline_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_sparkline_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_sparkline_Line;
}(Ext_sparkline_Base);

export { Ext_sparkline_Line as default };