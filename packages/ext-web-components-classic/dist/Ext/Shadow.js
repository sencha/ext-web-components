import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dom_Underlay from '../Ext/dom/Underlay.js';

var Ext_Shadow = /*#__PURE__*/function (_Ext_dom_Underlay) {
  _inheritsLoose(Ext_Shadow, _Ext_dom_Underlay);

  Ext_Shadow.PROPERTIES = function PROPERTIES() {
    return ['mode', 'offset', 'target', 'zIndex'];
  };

  Ext_Shadow.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_Shadow.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Shadow.PROPERTIES());
    return Ext_dom_Underlay.getProperties(properties);
  };

  Ext_Shadow.getEvents = function getEvents(events) {
    events = events.concat(Ext_Shadow.EVENTS());
    return Ext_dom_Underlay.getEvents(events);
  };

  _createClass(Ext_Shadow, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dom_Underlay.observedAttributes;
      Ext_Shadow.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Shadow.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Shadow(properties, events) {
    return _Ext_dom_Underlay.call(this, properties.concat(Ext_Shadow.PROPERTIES()), events.concat(Ext_Shadow.EVENTS())) || this;
  }

  var _proto = Ext_Shadow.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dom_Underlay.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dom_Underlay.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Shadow;
}(Ext_dom_Underlay);

export { Ext_Shadow as default };