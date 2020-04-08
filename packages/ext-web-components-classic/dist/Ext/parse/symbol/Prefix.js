import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_parse_Symbol from '../../../Ext/parse/Symbol.js';

var Ext_parse_symbol_Prefix = /*#__PURE__*/function (_Ext_parse_Symbol) {
  _inheritsLoose(Ext_parse_symbol_Prefix, _Ext_parse_Symbol);

  Ext_parse_symbol_Prefix.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_parse_symbol_Prefix.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_parse_symbol_Prefix.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_parse_symbol_Prefix.PROPERTIES());
    return Ext_parse_Symbol.getProperties(properties);
  };

  Ext_parse_symbol_Prefix.getEvents = function getEvents(events) {
    events = events.concat(Ext_parse_symbol_Prefix.EVENTS());
    return Ext_parse_Symbol.getEvents(events);
  };

  _createClass(Ext_parse_symbol_Prefix, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_parse_Symbol.observedAttributes;
      Ext_parse_symbol_Prefix.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_parse_symbol_Prefix.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_parse_symbol_Prefix(properties, events) {
    return _Ext_parse_Symbol.call(this, properties.concat(Ext_parse_symbol_Prefix.PROPERTIES()), events.concat(Ext_parse_symbol_Prefix.EVENTS())) || this;
  }

  var _proto = Ext_parse_symbol_Prefix.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_parse_Symbol.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_parse_Symbol.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_parse_symbol_Prefix;
}(Ext_parse_Symbol);

export { Ext_parse_symbol_Prefix as default };