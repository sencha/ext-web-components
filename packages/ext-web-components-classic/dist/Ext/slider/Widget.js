import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Widget from '../../Ext/Widget.js';

var Ext_slider_Widget = /*#__PURE__*/function (_Ext_Widget) {
  _inheritsLoose(Ext_slider_Widget, _Ext_Widget);

  Ext_slider_Widget.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'clickToChange', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'maxValue', 'minValue', 'name', 'nameable', 'plugins', 'publishes', 'publishOnComplete', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'vertical', 'viewModel', 'width'];
  };

  Ext_slider_Widget.EVENTS = function EVENTS() {
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

  Ext_slider_Widget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_slider_Widget.PROPERTIES());
    return Ext_Widget.getProperties(properties);
  };

  Ext_slider_Widget.getEvents = function getEvents(events) {
    events = events.concat(Ext_slider_Widget.EVENTS());
    return Ext_Widget.getEvents(events);
  };

  _createClass(Ext_slider_Widget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Widget.observedAttributes;
      Ext_slider_Widget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_slider_Widget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_slider_Widget(properties, events) {
    return _Ext_Widget.call(this, properties.concat(Ext_slider_Widget.PROPERTIES()), events.concat(Ext_slider_Widget.EVENTS())) || this;
  }

  var _proto = Ext_slider_Widget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Widget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Widget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_slider_Widget;
}(Ext_Widget);

export { Ext_slider_Widget as default };