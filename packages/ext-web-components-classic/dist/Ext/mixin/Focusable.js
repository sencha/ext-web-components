import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_mixin_Focusable = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_mixin_Focusable, _Ext_Base);

  Ext_mixin_Focusable.PROPERTIES = function PROPERTIES() {
    return ['focusCls', 'focusCls'];
  };

  Ext_mixin_Focusable.EVENTS = function EVENTS() {
    return [{
      name: 'blur',
      parameters: 'sender,event'
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
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_mixin_Focusable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_Focusable.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_mixin_Focusable.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_Focusable.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_mixin_Focusable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_mixin_Focusable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_Focusable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_Focusable(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_mixin_Focusable.PROPERTIES()), events.concat(Ext_mixin_Focusable.EVENTS())) || this;
  }

  var _proto = Ext_mixin_Focusable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_Focusable;
}(Ext_Base);

export { Ext_mixin_Focusable as default };