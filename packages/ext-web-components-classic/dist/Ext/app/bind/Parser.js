import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_parse_Parser from '../../../Ext/parse/Parser.js';

var Ext_app_bind_Parser = /*#__PURE__*/function (_Ext_parse_Parser) {
  _inheritsLoose(Ext_app_bind_Parser, _Ext_parse_Parser);

  var _super = _createSuper(Ext_app_bind_Parser);

  Ext_app_bind_Parser.PROPERTIES = function PROPERTIES() {
    return ['constants', 'infix', 'infixRight', 'prefix', 'symbols', 'token', 'tokenizer'];
  };

  Ext_app_bind_Parser.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_bind_Parser.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Parser.PROPERTIES());
    return Ext_parse_Parser.getProperties(properties);
  };

  Ext_app_bind_Parser.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_Parser.EVENTS());
    return Ext_parse_Parser.getEvents(events);
  };

  _createClass(Ext_app_bind_Parser, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_parse_Parser.observedAttributes;
      Ext_app_bind_Parser.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_Parser.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_Parser(properties, events) {
    return _Ext_parse_Parser.call(this, properties.concat(Ext_app_bind_Parser.PROPERTIES()), events.concat(Ext_app_bind_Parser.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_Parser.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_parse_Parser.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_parse_Parser.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_Parser;
}(Ext_parse_Parser);

export { Ext_app_bind_Parser as default };