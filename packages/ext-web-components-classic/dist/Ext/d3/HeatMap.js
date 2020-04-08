import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_svg_Svg from '../../Ext/d3/svg/Svg.js';

var Ext_d3_HeatMap = /*#__PURE__*/function (_Ext_d3_svg_Svg) {
  _inheritsLoose(Ext_d3_HeatMap, _Ext_d3_svg_Svg);

  Ext_d3_HeatMap.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clipScene', 'cls', 'colorAxis', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'labels', 'legend', 'listeners', 'margin', 'name', 'nameable', 'padding', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'size', 'store', 'style', 'tiles', 'tooltip', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'xAxis', 'yAxis'];
  };

  Ext_d3_HeatMap.EVENTS = function EVENTS() {
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
      name: 'sceneresize',
      parameters: 'component,scene,size'
    }, {
      name: 'scenesetup',
      parameters: 'component,scene'
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

  Ext_d3_HeatMap.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_HeatMap.PROPERTIES());
    return Ext_d3_svg_Svg.getProperties(properties);
  };

  Ext_d3_HeatMap.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_HeatMap.EVENTS());
    return Ext_d3_svg_Svg.getEvents(events);
  };

  _createClass(Ext_d3_HeatMap, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_svg_Svg.observedAttributes;
      Ext_d3_HeatMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_HeatMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_HeatMap(properties, events) {
    return _Ext_d3_svg_Svg.call(this, properties.concat(Ext_d3_HeatMap.PROPERTIES()), events.concat(Ext_d3_HeatMap.EVENTS())) || this;
  }

  var _proto = Ext_d3_HeatMap.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_svg_Svg.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_svg_Svg.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_HeatMap;
}(Ext_d3_svg_Svg);

export { Ext_d3_HeatMap as default };