import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_parse_Symbol from '../../../Ext/parse/Symbol.js';

var Ext_parse_symbol_Paren = /*#__PURE__*/function (_Ext_parse_Symbol) {
  _inheritsLoose(Ext_parse_symbol_Paren, _Ext_parse_Symbol);

  var _super = _createSuper(Ext_parse_symbol_Paren);

  Ext_parse_symbol_Paren.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_parse_symbol_Paren.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_parse_symbol_Paren.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_parse_symbol_Paren.PROPERTIES());
    return Ext_parse_Symbol.getProperties(properties);
  };

  Ext_parse_symbol_Paren.getEvents = function getEvents(events) {
    events = events.concat(Ext_parse_symbol_Paren.EVENTS());
    return Ext_parse_Symbol.getEvents(events);
  };

  _createClass(Ext_parse_symbol_Paren, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_parse_Symbol.observedAttributes;
      Ext_parse_symbol_Paren.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_parse_symbol_Paren.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_parse_symbol_Paren(properties, events) {
    return _Ext_parse_Symbol.call(this, properties.concat(Ext_parse_symbol_Paren.PROPERTIES()), events.concat(Ext_parse_symbol_Paren.EVENTS())) || this;
  }

  var _proto = Ext_parse_symbol_Paren.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_parse_Symbol.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_parse_Symbol.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_parse_symbol_Paren;
}(Ext_parse_Symbol);

export { Ext_parse_symbol_Paren as default };