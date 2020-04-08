import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_parse_Parser from '../../../Ext/parse/Parser.js';

var Ext_data_query_Parser = /*#__PURE__*/function (_Ext_parse_Parser) {
  _inheritsLoose(Ext_data_query_Parser, _Ext_parse_Parser);

  Ext_data_query_Parser.PROPERTIES = function PROPERTIES() {
    return ['constants', 'infix', 'infixRight', 'prefix', 'symbols', 'token', 'tokenizer'];
  };

  Ext_data_query_Parser.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_query_Parser.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_query_Parser.PROPERTIES());
    return Ext_parse_Parser.getProperties(properties);
  };

  Ext_data_query_Parser.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_query_Parser.EVENTS());
    return Ext_parse_Parser.getEvents(events);
  };

  _createClass(Ext_data_query_Parser, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_parse_Parser.observedAttributes;
      Ext_data_query_Parser.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_query_Parser.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_query_Parser(properties, events) {
    return _Ext_parse_Parser.call(this, properties.concat(Ext_data_query_Parser.PROPERTIES()), events.concat(Ext_data_query_Parser.EVENTS())) || this;
  }

  var _proto = Ext_data_query_Parser.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_parse_Parser.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_parse_Parser.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_query_Parser;
}(Ext_parse_Parser);

export { Ext_data_query_Parser as default };