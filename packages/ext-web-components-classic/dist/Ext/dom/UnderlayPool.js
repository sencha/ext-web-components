import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_dom_UnderlayPool = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_dom_UnderlayPool, _Ext_Base);

  Ext_dom_UnderlayPool.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dom_UnderlayPool.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_dom_UnderlayPool.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dom_UnderlayPool.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dom_UnderlayPool.getEvents = function getEvents(events) {
    events = events.concat(Ext_dom_UnderlayPool.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dom_UnderlayPool, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dom_UnderlayPool.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dom_UnderlayPool.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dom_UnderlayPool(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dom_UnderlayPool.PROPERTIES()), events.concat(Ext_dom_UnderlayPool.EVENTS())) || this;
  }

  var _proto = Ext_dom_UnderlayPool.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dom_UnderlayPool;
}(Ext_Base);

export { Ext_dom_UnderlayPool as default };