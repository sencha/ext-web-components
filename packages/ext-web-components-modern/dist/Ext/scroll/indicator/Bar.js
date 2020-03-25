import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_scroll_indicator_Indicator from '../../../Ext/scroll/indicator/Indicator.js';

var Ext_scroll_indicator_Bar = /*#__PURE__*/function (_Ext_scroll_indicator) {
  _inheritsLoose(Ext_scroll_indicator_Bar, _Ext_scroll_indicator);

  var _super = _createSuper(Ext_scroll_indicator_Bar);

  Ext_scroll_indicator_Bar.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'axis', 'bind', 'border', 'cls', 'constrainAlign', 'controller', 'defaultListenerScope', 'disabled', 'enabled', 'flex', 'floated', 'focusCls', 'height', 'hidden', 'hideMode', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'relative', 'renderTo', 'ripple', 'scroller', 'session', 'shadow', 'shareableName', 'shim', 'style', 'stylesheet', 'toFrontOnShow', 'touchAction', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width', 'x', 'y'];
  };

  Ext_scroll_indicator_Bar.EVENTS = function EVENTS() {
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

  Ext_scroll_indicator_Bar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_scroll_indicator_Bar.PROPERTIES());
    return Ext_scroll_indicator_Indicator.getProperties(properties);
  };

  Ext_scroll_indicator_Bar.getEvents = function getEvents(events) {
    events = events.concat(Ext_scroll_indicator_Bar.EVENTS());
    return Ext_scroll_indicator_Indicator.getEvents(events);
  };

  _createClass(Ext_scroll_indicator_Bar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_scroll_indicator.observedAttributes;
      Ext_scroll_indicator_Bar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_scroll_indicator_Bar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_scroll_indicator_Bar(properties, events) {
    return _Ext_scroll_indicator.call(this, properties.concat(Ext_scroll_indicator_Bar.PROPERTIES()), events.concat(Ext_scroll_indicator_Bar.EVENTS())) || this;
  }

  var _proto = Ext_scroll_indicator_Bar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_scroll_indicator.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_scroll_indicator.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_scroll_indicator_Bar;
}(Ext_scroll_indicator_Indicator);

export { Ext_scroll_indicator_Bar as default };