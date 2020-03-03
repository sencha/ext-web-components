import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_direct_Transaction = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_direct_Transaction, _Ext_Base);

  Ext_direct_Transaction.PROPERTIES = function PROPERTIES() {
    return ['provider'];
  };

  Ext_direct_Transaction.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_direct_Transaction.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_direct_Transaction.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_direct_Transaction.getEvents = function getEvents(events) {
    events = events.concat(Ext_direct_Transaction.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_direct_Transaction, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_direct_Transaction.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_direct_Transaction.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_direct_Transaction(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_direct_Transaction.PROPERTIES()), events.concat(Ext_direct_Transaction.EVENTS())) || this;
  }

  var _proto = Ext_direct_Transaction.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_direct_Transaction;
}(Ext_Base);

export { Ext_direct_Transaction as default };