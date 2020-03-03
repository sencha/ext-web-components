import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Evented from '../../Ext/Evented.js';

var Ext_scroll_NativeScroller = /*#__PURE__*/function (_Ext_Evented) {
  _inheritsLoose(Ext_scroll_NativeScroller, _Ext_Evented);

  Ext_scroll_NativeScroller.PROPERTIES = function PROPERTIES() {
    return ['A', 'An', 'an', 'element', 'listeners', 'rtl', 'scrollbars', 'scrollElement', 'size', 'touchAction', 'x', 'y'];
  };

  Ext_scroll_NativeScroller.EVENTS = function EVENTS() {
    return [{
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'scroll',
      parameters: 'sender,x,y,deltaX,deltaY'
    }, {
      name: 'scrollend',
      parameters: 'sender,x,y,deltaX,deltaY'
    }, {
      name: 'scrollstart',
      parameters: 'sender,x,y'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_scroll_NativeScroller.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_scroll_NativeScroller.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  };

  Ext_scroll_NativeScroller.getEvents = function getEvents(events) {
    events = events.concat(Ext_scroll_NativeScroller.EVENTS());
    return Ext_Evented.getEvents(events);
  };

  _createClass(Ext_scroll_NativeScroller, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Evented.observedAttributes;
      Ext_scroll_NativeScroller.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_scroll_NativeScroller.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_scroll_NativeScroller(properties, events) {
    return _Ext_Evented.call(this, properties.concat(Ext_scroll_NativeScroller.PROPERTIES()), events.concat(Ext_scroll_NativeScroller.EVENTS())) || this;
  }

  var _proto = Ext_scroll_NativeScroller.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Evented.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Evented.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_scroll_NativeScroller;
}(Ext_Evented);

export { Ext_scroll_NativeScroller as default };