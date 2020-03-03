import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_dom_TouchAction = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dom_TouchAction, _Ext_Base);

  Ext_dom_TouchAction.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dom_TouchAction.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dom_TouchAction.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dom_TouchAction.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dom_TouchAction.getEvents = function getEvents(events) {
    events = events.concat(Ext_dom_TouchAction.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dom_TouchAction, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dom_TouchAction.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dom_TouchAction.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dom_TouchAction(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dom_TouchAction.PROPERTIES()), events.concat(Ext_dom_TouchAction.EVENTS())) || this;
  }

  var _proto = Ext_dom_TouchAction.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dom_TouchAction;
}(Ext_Base);

export { Ext_dom_TouchAction as default };