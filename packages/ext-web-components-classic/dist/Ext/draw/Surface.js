import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_SurfaceBase from '../../Ext/draw/SurfaceBase.js';

var Ext_draw_Surface = /*#__PURE__*/function (_Ext_draw_SurfaceBase) {
  _inheritsLoose(Ext_draw_Surface, _Ext_draw_SurfaceBase);

  Ext_draw_Surface.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'background', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'dirty', 'disabled', 'flipRtlText', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rect', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_draw_Surface.EVENTS = function EVENTS() {
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

  Ext_draw_Surface.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_Surface.PROPERTIES());
    return Ext_draw_SurfaceBase.getProperties(properties);
  };

  Ext_draw_Surface.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_Surface.EVENTS());
    return Ext_draw_SurfaceBase.getEvents(events);
  };

  _createClass(Ext_draw_Surface, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_SurfaceBase.observedAttributes;
      Ext_draw_Surface.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_Surface.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_Surface(properties, events) {
    return _Ext_draw_SurfaceBase.call(this, properties.concat(Ext_draw_Surface.PROPERTIES()), events.concat(Ext_draw_Surface.EVENTS())) || this;
  }

  var _proto = Ext_draw_Surface.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_SurfaceBase.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_SurfaceBase.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_Surface;
}(Ext_draw_SurfaceBase);

export { Ext_draw_Surface as default };