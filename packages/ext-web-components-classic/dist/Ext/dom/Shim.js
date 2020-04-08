import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dom_Underlay from '../../Ext/dom/Underlay.js';

var Ext_dom_Shim = /*#__PURE__*/function (_Ext_dom_Underlay) {
  _inheritsLoose(Ext_dom_Shim, _Ext_dom_Underlay);

  Ext_dom_Shim.PROPERTIES = function PROPERTIES() {
    return ['target', 'zIndex'];
  };

  Ext_dom_Shim.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dom_Shim.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dom_Shim.PROPERTIES());
    return Ext_dom_Underlay.getProperties(properties);
  };

  Ext_dom_Shim.getEvents = function getEvents(events) {
    events = events.concat(Ext_dom_Shim.EVENTS());
    return Ext_dom_Underlay.getEvents(events);
  };

  _createClass(Ext_dom_Shim, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dom_Underlay.observedAttributes;
      Ext_dom_Shim.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dom_Shim.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dom_Shim(properties, events) {
    return _Ext_dom_Underlay.call(this, properties.concat(Ext_dom_Shim.PROPERTIES()), events.concat(Ext_dom_Shim.EVENTS())) || this;
  }

  var _proto = Ext_dom_Shim.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dom_Underlay.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dom_Underlay.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dom_Shim;
}(Ext_dom_Underlay);

export { Ext_dom_Shim as default };