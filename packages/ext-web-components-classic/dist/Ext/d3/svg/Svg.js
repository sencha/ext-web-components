import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_d3_Component from '../../../Ext/d3/Component.js';

var Ext_d3_svg_Svg = /*#__PURE__*/function (_Ext_d3_Component) {
  _inheritsLoose(Ext_d3_svg_Svg, _Ext_d3_Component);

  Ext_d3_svg_Svg.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clipScene', 'cls', 'componentCls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'interactions', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'padding', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'size', 'store', 'style', 'touchAction', 'transitions', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_d3_svg_Svg.EVENTS = function EVENTS() {
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

  Ext_d3_svg_Svg.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_d3_svg_Svg.PROPERTIES());
    return Ext_d3_Component.getProperties(properties);
  };

  Ext_d3_svg_Svg.getEvents = function getEvents(events) {
    events = events.concat(Ext_d3_svg_Svg.EVENTS());
    return Ext_d3_Component.getEvents(events);
  };

  _createClass(Ext_d3_svg_Svg, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_d3_Component.observedAttributes;
      Ext_d3_svg_Svg.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_d3_svg_Svg.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_d3_svg_Svg(properties, events) {
    return _Ext_d3_Component.call(this, properties.concat(Ext_d3_svg_Svg.PROPERTIES()), events.concat(Ext_d3_svg_Svg.EVENTS())) || this;
  }

  var _proto = Ext_d3_svg_Svg.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_d3_Component.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_d3_Component.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_d3_svg_Svg;
}(Ext_d3_Component);

export { Ext_d3_svg_Svg as default };