import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_draw_SurfaceBase from '../../Ext/draw/SurfaceBase.js';

var Ext_draw_Surface = /*#__PURE__*/function (_Ext_draw_SurfaceBase) {
  _inheritsLoose(Ext_draw_Surface, _Ext_draw_SurfaceBase);

  var _super = _createSuper(Ext_draw_Surface);

  Ext_draw_Surface.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'background', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'dirty', 'disabled', 'flex', 'flipRtlText', 'floated', 'focusCls', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'rect', 'reference', 'relative', 'renderTo', 'ripple', 'session', 'shadow', 'shareableName', 'shim', 'style', 'toFrontOnShow', 'touchAction', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width', 'x', 'y'];
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
      name: 'beforetofront',
      parameters: 'sender'
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
      name: 'tofront',
      parameters: 'sender'
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