import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget from '../../Ext/Widget.js';

var Ext_draw_SurfaceBase = /*#__PURE__*/function (_Ext_Widget) {
  _inheritsLoose(Ext_draw_SurfaceBase, _Ext_Widget);

  Ext_draw_SurfaceBase.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_draw_SurfaceBase.EVENTS = function EVENTS() {
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

  Ext_draw_SurfaceBase.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_SurfaceBase.PROPERTIES());
    return Ext_Widget.getProperties(properties);
  };

  Ext_draw_SurfaceBase.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_SurfaceBase.EVENTS());
    return Ext_Widget.getEvents(events);
  };

  _createClass(Ext_draw_SurfaceBase, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget.observedAttributes;
      Ext_draw_SurfaceBase.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_SurfaceBase.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_SurfaceBase(properties, events) {
    return _Ext_Widget.call(this, properties.concat(Ext_draw_SurfaceBase.PROPERTIES()), events.concat(Ext_draw_SurfaceBase.EVENTS())) || this;
  }

  var _proto = Ext_draw_SurfaceBase.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_SurfaceBase;
}(Ext_Widget);

export { Ext_draw_SurfaceBase as default };