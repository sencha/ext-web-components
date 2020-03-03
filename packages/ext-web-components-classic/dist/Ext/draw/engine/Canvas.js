import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Surface from '../../../Ext/draw/Surface.js';

var Ext_draw_engine_Canvas = /*#__PURE__*/function (_Ext_draw_Surface) {
  _inheritsLoose(Ext_draw_engine_Canvas, _Ext_draw_Surface);

  Ext_draw_engine_Canvas.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'background', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'dirty', 'disabled', 'flipRtlText', 'focusCls', 'height', 'hidden', 'hideMode', 'highPrecision', 'instanceCls', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'precisionOverrides', 'publishes', 'rect', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_draw_engine_Canvas.EVENTS = function EVENTS() {
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

  Ext_draw_engine_Canvas.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_engine_Canvas.PROPERTIES());
    return Ext_draw_Surface.getProperties(properties);
  };

  Ext_draw_engine_Canvas.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_engine_Canvas.EVENTS());
    return Ext_draw_Surface.getEvents(events);
  };

  _createClass(Ext_draw_engine_Canvas, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_Surface.observedAttributes;
      Ext_draw_engine_Canvas.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_engine_Canvas.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_engine_Canvas(properties, events) {
    return _Ext_draw_Surface.call(this, properties.concat(Ext_draw_engine_Canvas.PROPERTIES()), events.concat(Ext_draw_engine_Canvas.EVENTS())) || this;
  }

  var _proto = Ext_draw_engine_Canvas.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_Surface.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_Surface.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_engine_Canvas;
}(Ext_draw_Surface);

export { Ext_draw_engine_Canvas as default };