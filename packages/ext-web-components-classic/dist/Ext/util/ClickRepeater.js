import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_ClickRepeater = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_ClickRepeater, _Ext_Base);

  Ext_util_ClickRepeater.PROPERTIES = function PROPERTIES() {
    return ['accelerate', 'delay', 'el', 'el', 'handler', 'interval', 'listeners', 'pressedCls', 'preventDefault', 'scope', 'stopDefault', 'target'];
  };

  Ext_util_ClickRepeater.EVENTS = function EVENTS() {
    return [{
      name: 'click',
      parameters: 'sender,e'
    }, {
      name: 'mousedown',
      parameters: 'sender,e'
    }, {
      name: 'mouseup',
      parameters: 'sender,e'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_ClickRepeater.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_ClickRepeater.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_ClickRepeater.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_ClickRepeater.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_ClickRepeater, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_ClickRepeater.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_ClickRepeater.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_ClickRepeater(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_ClickRepeater.PROPERTIES()), events.concat(Ext_util_ClickRepeater.EVENTS())) || this;
  }

  var _proto = Ext_util_ClickRepeater.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_ClickRepeater;
}(Ext_Base);

export { Ext_util_ClickRepeater as default };