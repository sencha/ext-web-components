import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_parse_symbol_Infix from '../../../Ext/parse/symbol/Infix.js';

var Ext_parse_symbol_InfixRight = /*#__PURE__*/function (_Ext_parse_symbol_Inf) {
  _inheritsLoose(Ext_parse_symbol_InfixRight, _Ext_parse_symbol_Inf);

  Ext_parse_symbol_InfixRight.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_parse_symbol_InfixRight.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_parse_symbol_InfixRight.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_parse_symbol_InfixRight.PROPERTIES());
    return Ext_parse_symbol_Infix.getProperties(properties);
  };

  Ext_parse_symbol_InfixRight.getEvents = function getEvents(events) {
    events = events.concat(Ext_parse_symbol_InfixRight.EVENTS());
    return Ext_parse_symbol_Infix.getEvents(events);
  };

  _createClass(Ext_parse_symbol_InfixRight, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_parse_symbol_Inf.observedAttributes;
      Ext_parse_symbol_InfixRight.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_parse_symbol_InfixRight.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_parse_symbol_InfixRight(properties, events) {
    return _Ext_parse_symbol_Inf.call(this, properties.concat(Ext_parse_symbol_InfixRight.PROPERTIES()), events.concat(Ext_parse_symbol_InfixRight.EVENTS())) || this;
  }

  var _proto = Ext_parse_symbol_InfixRight.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_parse_symbol_Inf.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_parse_symbol_Inf.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_parse_symbol_InfixRight;
}(Ext_parse_symbol_Infix);

export { Ext_parse_symbol_InfixRight as default };